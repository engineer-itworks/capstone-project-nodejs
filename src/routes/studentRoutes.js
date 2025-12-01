const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents } = require("../controllers/studentController");

router.post("/create", createStudent);
router.get("/getAll", getAllStudents);

module.exports = router;