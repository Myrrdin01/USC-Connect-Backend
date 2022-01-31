//What URLs should we share resources with?

const config = require("../../config");

const options = () => {
  // Go Database To Load Origins

  return { origin: "*" };
};

const corsOrigins = options();

module.exports = { corsOrigins };
