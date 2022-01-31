const cluster = require("cluster");
const http = require("http");
const express = require("express");
const cors = require("cors");
const numCPUs = require("os").cpus().length;
const { setupMaster, setupWorker } = require("@socket.io/sticky");
const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");

const entryPoint = require("./index.js");
const logger = require("./log/server");
const config = require("./config");
const { corsOrigins } = require("./middlewares/cors");
const { connectDB } = require("./helper/db");

const PORT = config.server.PORT;

connectDB();
clusterEntry();

async function clusterEntry() {
  // Load Cors URLs

  const corsURLs = await corsOrigins.origin;

  if (cluster.isMaster) {
    logger.info({
      message: `Master ${process.pid} is running`,
      timestamp: new Date().toString(),
    });
    const httpServer = http.createServer();

    // setup sticky sessions
    setupMaster(httpServer, {
      loadBalancingMethod: "least-connection",
    });

    // setup connections between the workers
    setupPrimary();

    // needed for packets containing buffers (you can ignore it if you only send plaintext objects)
    // Node.js < 16.0.0
    cluster.setupMaster({
      serialization: "advanced",
    });

    httpServer.listen(PORT, () => {
      logger.info(`Listening on PORT:${PORT}`);
    });

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker) => {
      logger.info({
        message: `Worker ${worker.process.pid} died`,
        timestamp: new Date().toString(),
      });
      cluster.fork();
    });
  } else {
    logger.info({
      message: `Worker ${process.pid} started`,
      timestamp: new Date().toString(),
    });

    const app = express();
    const httpServer = http.createServer(app);
    const io = require("socket.io")(httpServer, {
      cors: {
        origin: corsURLs,
      },
    });

    // CORS

    app.use(
      cors({
        origin: corsURLs,
        optionSuccessStatus: 200,
      })
    );

    // use the cluster adapter
    io.adapter(createAdapter());

    // setup connection with the primary process
    setupWorker(io);

    // Wrap index.js
    entryPoint(io, app);
  }
}
