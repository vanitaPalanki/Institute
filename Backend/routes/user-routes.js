const express = require("express");
const { check } = require("express-validator");

const studentController = require("../controllers/user-controllers");

const router = express.Router();

router.post(
  "/Signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  studentController.studentSignup
);

module.exports = router;
