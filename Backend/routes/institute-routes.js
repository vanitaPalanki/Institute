const express = require("express");
const { check } = require("express-validator");

const instituteController = require("../controllers/institute-controllers");

const irouter = express.Router();

irouter.post(
  "/instituteSignup",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  instituteController.instituteSignup
);

module.exports = irouter;
