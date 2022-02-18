const express = require("express");
const router = express.Router();
const TOP_ROUTE = "/event";

// Import sevice

const { events } = require("../../../service");

function eventController(io) {
  // Get events
  router.get(`${TOP_ROUTE}s`, getEvents);
  router.post(`${TOP_ROUTE}`, createEvent);

  return router;

  function getEvents(req, res, next) {
    events
      .getAll({
        page_size: req.query.page_size,
        page_number: req.query.page_number,
      })
      .then((events) => {
        res.status(200).json(events);
      })
      .catch((err) => next(err));
  }

  function createEvent(req, res, next) {
    res.send("You Created An Event");
  }
}

module.exports = eventController;
