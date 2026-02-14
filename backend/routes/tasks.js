import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskStats,
} from '../controllers/taskController.js';
import { protect, authorize } from '../services/authService.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Stats route (before :id route)
router.get('/stats', getTaskStats);

// Main routes
router.route('/').get(getTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;