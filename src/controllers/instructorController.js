const Instructor = require("../models/Instructor");

async function createInstructor(req, res, next) {
    try {
        const {name, description} = req.body;
        const newInstructor = await Instructor.create({name, description});
        res.status(201).json({ message: "Instructor created successfully", data: newInstructor });
    }
    catch(err) {
        next(err);
    }
}

async function getAllInstructors(req, res, next) {
    try {
        const instructors = await Instructor.find();
        res.status(200).json({
            message: "Instructors fetched successfully",
            data: instructors
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { createInstructor, getAllInstructors };