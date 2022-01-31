require("dotenv-flow").config({
  silent: true,
});
const path = require("path");
var LOG_LOCATION;
const ENV = process.env;

try {
  LOG_LOCATION = path.resolve(__dirname, ENV.LOG_FILE);
} catch (err) {
  LOG_LOCATION = path.resolve(__dirname, "../../logs/errors.log");
}

/*

  Central point of all major variables that are needed to run the service.

  Everything should be edited or altered to fit the CPU it will be ran on by using .env files.

  A .example.env file will be avaliable to display all variables used by the system.

*/

const variables = {
  environment: {
    NODE_ENV: ENV.NODE_ENV || "development",
  },

  resources: {
    RESOURCE_PATH: ENV.RESOURCE_PATH || "container/resources", // From root
    CONTAINER_PATH: ENV.CONTAINER_PATH || "container", // From root
  },

  //Server API
  server: {
    PROTOCOL: ENV.PROTOCOL || "http",
    HOST: ENV.HOST || "localhost",
    PORT: ENV.PORT || 3000,
  },

  debug: {
    LOG_FILE: LOG_LOCATION,
    LOG_MAXFILES: ENV.LOG_MAXFILES || 5,
    LOG_MAXSIZE: ENV.LOG_MAXSIZE || 5242880,
  },

  db: {
    URI: ENV.DB_URI,
    USER: ENV.DB_USER,
    PASSWORD: ENV.DB_PASSWORD,
    NAME: ENV.DB_NAME,
    HOST: ENV.DB_HOST || "localhost",
    DIALECT: ENV.DB_DIALECT || "mysql",
  },

  email: {
    SERVICE: ENV.EMAIL_SERVICE || "Gmail",
    ADDRESS: ENV.EMAIL_ADDRESS,
    PASSWORD: ENV.EMAIL_PASSWORD,
  },
};

const config = { ...variables };

module.exports = config;
