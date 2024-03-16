const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      throw new Error(`No task with id : ${taskID}`, 404);
    }
    res.status(200).json({ task });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      throw new Error(`No task with id : ${taskID}`, 404);
    }
    res.status(200).json({ task });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      throw new Error(`No task with id : ${taskID}`, 404);
    }
    res.status(200).json({ task });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
