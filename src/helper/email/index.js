const config = require("../../config");
const nodemailer = require("nodemailer");

// with environment variables enter the Email that will be used to as a helper of the API

const transporter = nodemailer.createTransport({
  service: config.email.SERVICE,
  auth: {
    user: config.email.ADDRESS,
    pass: config.email.PASSWORD,
  },
});

module.exports = transporter;
