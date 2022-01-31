// Websockets

const { notificationHandler } = require("./controllers/websocket/notification");

// Http

const { resourceController } = require("./controllers/http/resources");
const exampleController = require("./controllers/http/example");

const logger = require("../log/server");
const wrapper = require("../middlewares/wrapper");
const express = require("express");
const router = express.Router();

function websockets(io) {
  // Websockets
  notificationHandler(io);
  // HTTP(s)
  router.use(exampleController(io), resourceController(io));
}

module.exports = { router, websockets };
