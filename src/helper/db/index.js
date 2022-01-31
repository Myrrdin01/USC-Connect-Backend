const logger = require("../../log/server");
const config = require("../../config");
const { Sequelize } = require("sequelize");

// Create Connection With SQL-database

const DB_URI = config.db.URI || null;
const DB_USER = config.db.USER || null;
const DB_PASSWORD = config.db.PASSWORD || null;
const DB_NAME = config.db.NAME || null;
const DB_HOST = config.db.HOST || null;
const DB_DIALECT = config.db.DIALECT || null;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const connectDB = async (req, res, next) => {
  try {
    await sequelize.authenticate();
    logger.info({
      message: `Connection been established successfully`,
      timestamp: `${new Date().toString()}`,
    });
  } catch (error) {
    logger.error({
      message: error,
      timestamp: `${new Date().toString()}`,
    });
  }

  next();
};

module.exports = { connectDB };
