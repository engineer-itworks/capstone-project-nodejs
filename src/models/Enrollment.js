const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    courseId: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Enrollment", EnrollmentSchema);