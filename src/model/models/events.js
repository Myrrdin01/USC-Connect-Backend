const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({});

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
