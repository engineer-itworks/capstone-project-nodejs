const Course = require("../models/Course");

async function createCourse(req, res, next) {
    try {
        const {title, description, instructor, duration} = req.body;
        const newCourse = await Course.create({title, description, instructor, duration});
        res.status(201).json({ message: "Course created successfully", data: newCourse });
    }
    catch(err) {
        next(err);
    }
}

async function getAllCourses(req, res, next) {
    try {
        const courses = await Course.find(); // get all documents
        res.status(200).json({
            message: "Courses fetched successfully",
            data: courses
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { createCourse, getAllCourses };