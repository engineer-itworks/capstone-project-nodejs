const Enrollment = require("../models/Enrollment");

async function enrollStudent(req, res, next) {
    try {
        const {studentId, courseId} = req.body;
        const newEnrollment = await Enrollment.create({studentId, courseId});
        res.status(201).json({ message: "Enrollment done successfully", data: newEnrollment });
    }
    catch(err) {
        next(err);
    }
}

module.exports = { enrollStudent };