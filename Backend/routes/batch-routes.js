const express = require("express");
//const { check } = require("express-validator");

const batchController = require("../controllers/batch-controllers");

const brouter = express.Router();

brouter.post("/add", batchController.addBatch);

module.exports = brouter;
