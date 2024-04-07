import taskModel from "../models/tasks.models.js";

const createTask = async (req, res) => {
  try {
    const Tasks = await taskModel.create(req.body);
    res.status(200).json({ message: "Task Added", Tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
const getAllTask = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json({ message: "Task Retrieved", tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Errror !" });
  }
};
const getTaskById = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task found", task });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated", updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await taskModel.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const taskController = {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
};
export default taskController;
