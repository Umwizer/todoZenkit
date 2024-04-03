import taskModel from '../models/tasks.models.js'


const createTask = async (req,res) => {
    try {
        const Tasks = await taskModel.create(req.body);
        res.status(200).json({ message: "Task Added", Tasks});
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error" });
      }
}
const getAllTask = async (req,res) => {
    try{
        const getTask = await taskModel.find()
        res.status(200).json({message:"All Tasks",getTask})
    }
    catch(error){
        res.status(500).json({ message: "internal server error" });
    }
}
const getTaskById = async (req,res) =>{
try{
    const getId = await taskModel.findById(req.params.id)
    if(!getId){
        res.status(404).json({message:"task not found"})
    }
    res.status(200).json({message:"Task according to id",getTaskById})
}
catch(error){
res.status(500).json({message:"internal server error "})
}
}
const updateTask = async (req,res) => {
    try{
const updateTasks = await taskModel.findByIdAndUpdate(req.params.id,req.body, { new: true });
if (!updateTasks) {
res.status(404).json({message:"task not found"})
}
    }
    catch(error){
res.status(500).json({message:"Internal Server Error !"})
    }
}  
const deleteTask = async (req, res) => {
try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const taskController  = {
    createTask,
    getAllTask,
    getTaskById,
    updateTask,
    deleteTask
}
export default taskController;