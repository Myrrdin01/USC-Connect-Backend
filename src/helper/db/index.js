const mongoose = require("mongoose");
const logger = require("../../log/server");
const config = require("../../config");

//............. DB MODELS.............................

// Create the database connection

const DB_URI = config.db.URI;
const DB_USER = config.db.USER || null;
const DB_PASSWORD = config.db.PASSWORD || null;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      user: DB_USER,
      pass: DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    logger.error({
      timestamp: `${new Date().toString()}`,
      message: `${err.message}`,
    });
  }
};

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  logger.info({
    timestamp: `${new Date().toString()}`,
    message: "Mongoose default connection is open",
  });
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  logger.error({
    timestamp: `${new Date().toString()}`,
    message: "Mongoose default connection error: " + err,
  });
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  logger.info({
    timestamp: `${new Date().toString()}`,
    message: "Mongoose default connection disconnected",
  });
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    logger.info({
      timestamp: `${new Date().toString()}`,
      message:
        "Mongoose default connection disconnected through app termination",
    });
    process.exit(0);
  });
});

//..............Central access point to all db models.....................

module.exports = { connectDB };
