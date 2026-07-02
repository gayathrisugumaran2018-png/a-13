const taskModel = require("../model/tasks.model");

//API model
//Get

const allTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Task fetching failed" });
    }

};

//Post
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const task = await taskModel.create({ title, description, status });

        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: "tasks creation failed" })
    }
};

//Put 
const updateTask = async (req, res) => {
    try {
        const updatedTask = await taskModel.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: "task updation failed" })
    }
};

//delete
const deleteTask = async (req, res) => {
    try {
        await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "task deleted" });
    } catch (err) {
        res.status(500).json({ message: "task deleltion failed" });

    }

};

module.exports = { allTasks, createTask, updateTask, deleteTask} 