import express from 'express';
import { register, login, getMe, updateUserRole, getUsers } from '../controllers/authController.js';
import { protect, authorize } from '../services/authService.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

// Admin/Manager routes for user management
router.get('/users', protect, authorize('admin', 'manager'), getUsers);
router.patch('/users/:id/role', protect, authorize('admin', 'manager'), updateUserRole);

export default router;