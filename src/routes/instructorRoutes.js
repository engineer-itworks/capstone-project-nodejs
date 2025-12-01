const express = require("express");
const router = express.Router();
const { createInstructor, getAllInstructors } = require("../controllers/instructorController");

router.post("/create", createInstructor);
router.get("/getAll", getAllInstructors);

module.exports = router;