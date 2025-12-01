const express = require("express");
const router = express.Router();
const { enrollStudent } = require("../controllers/enrollmentController");

router.post("/create", enrollStudent);

module.exports = router;