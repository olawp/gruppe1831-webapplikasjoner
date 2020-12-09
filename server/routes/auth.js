/**
 * @author Ola Wethal Petersen
 * @desc Routes for authorization. Bestemmer hvor authdata skal sendes.
 * @exports router
 */

import express from 'express';
// eslint-disable-next-line import/named
import { authController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';
import { validateField } from '../middleware/validate.js';
import { loginSchema } from '../schemas/user.js';

const router = express.Router();

router.post('/login', validateField(loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', isAuthenticated, authController.currentUser);

export default router;
