const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;
const { setupMaster } = require("@socket.io/sticky");
const { setupPrimary } = require("@socket.io/cluster-adapter");

const logger = require("./log/server");
const config = require("./config");
const entry = require("./index.js");

const PORT = config.server.PORT;

/*

10/02/2022 10:08AM

Setup index.js file to use clusters with websockets and http

*/

(function Entry() {
  if (cluster.isMaster) {
    logger.info({
      timestamp: new Date().toString(),
      message: `Master ${process.pid} is running`,
    });
    const httpServer = http.createServer();

    setupMaster(httpServer, {
      loadBalancingMethod: "least-connection",
    });

    setupPrimary();

    cluster.setupMaster({
      serialization: "advanced",
    });

    httpServer.listen(PORT, () => {
      logger.info({
        timestamp: new Date().toString(),
        message: `Listening on port ${PORT}`,
      });
    });

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker) => {
      logger.warning({
        timestamp: new Date().toString(),
        message: `Worker ${worker.process.pid} died`,
      });
      cluster.fork();
    });
  } else {
    logger.info({
      timestamp: new Date().toString(),
      message: `Worker ${process.pid} started`,
    });

    entry();
  }
})();
