const Student = require("../models/Student");

async function createStudent(req, res, next) {
    try {
        const {name, description} = req.body;
        const newStudent = await Student.create({name, description});
        res.status(201).json({ message: "Student created successfully", data: newStudent });
    }
    catch(err) {
        next(err);
    }
}

async function getAllStudents(req, res, next) {
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "Students fetched successfully",
            data: students
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { createStudent, getAllStudents };