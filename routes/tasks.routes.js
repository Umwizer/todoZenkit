
import express from 'express';
import taskController from '../controllers/tasks.controller.js'

const router = express.Router();
// Routes
router.get('/tasks', taskController.getAllTask);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

// Error handling middleware

export default router;