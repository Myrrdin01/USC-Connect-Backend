const express = require("express");
const router = express.Router();
const TOP_ROUTE = "/example";

function exampleController(io) {
  router.post(`${TOP_ROUTE}`, postExample);
  router.get(`${TOP_ROUTE}`, getExample);

  return router;

  function postExample(req, res, next) {
    res.send(req.body.message);
    io.emit("event-example", {
      message: req.body.message,
      user: req.query.user,
      timestamp: new Date(),
    });
  }

  function getExample(req, res, next) {
    res.status(200).json({ message: "Hello World" });
  }
}

module.exports = exampleController;
