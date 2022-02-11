const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Enter Event Name"], unique: false },
  description: { type: Date },
  department: { type: String },
  description: { type: String },
  more_details: {},
  created_by: { type: String }, // Admin ID
});

const Resource = mongoose.model("Resources", ResourceSchema);

module.exports = Resource;
