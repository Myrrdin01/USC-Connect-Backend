const express = require("express");
const http = require("http");
const helmet = require("helmet");
const path = require("path");

const config = require("./config");
const { jsonParser, urlencodedParser } = require("./middlewares/body-parser");
const { router, websockets } = require("./controller");
const errorHandler = require("./middlewares/error-handler");

module.exports = async function entryPoint(io, app) {
  //require("./auth/passport");

  //app.use(passport.initialize());
  app.use(helmet());
  app.use(urlencodedParser);
  app.use(jsonParser);
  app.use("/api", router);
  app.use(
    "/container",
    express.static(
      path.join(__dirname, `../${config.resources.CONTAINER_PATH}`)
    )
  );
  app.use("*", (req, res, next) => {
    next({ name: "NotFound", message: "Resource Not Found" });
  });
  app.use(errorHandler);

  //io.use(wrapper(passport.initialize()));
  websockets(io);
};
