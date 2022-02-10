const websocketHandler = require("./server/websocket");
const httpHandler = require("./server/http");
const { corsOrigins } = require("./middlewares/cors");
const { connectDB } = require("./helper/db");

const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);

connectDB();

module.exports = async function entry() {
  const corsURLs = await corsOrigins.origin;

  // Setup cors

  const io = require("socket.io")(httpServer, {
    cors: {
      origins: corsURLs,
    },
  });

  app.use(
    cors({
      origin: corsURLs,
      optionSuccessStatus: 200,
    })
  );

  // Entry For Both Websocket and HTTP aspect of project

  websocketHandler(io);
  httpHandler(app, express, io);
};
