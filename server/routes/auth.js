/**
 * @author Ola Wethal Petersen
 * @desc Routes for authorization. Bestemmer hvor authdata skal sendes.
 * @exports router
 */

import express from 'express';
// eslint-disable-next-line import/named
import { authController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';
import { loginSchema } from '../schemas/user.js';
import { validation } from '../middleware/validation.js';

const router = express.Router();

router.post('/login', validation(loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', isAuthenticated, authController.currentUser);

export default router;
