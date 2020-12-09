/**
 * @author Ola Wethal Petersen
 * @desc Routes for brukedata. Bestemmer hvor dataen skal sendes.
 * @exports router
 */
import express from 'express';
// eslint-disable-next-line import/named
import { userController } from '../controllers/index.js';
import { validateField } from '../middleware/validate.js';
import { registerSchema } from '../schemas/user.js';

const router = express.Router();

router.post('/', validateField(registerSchema), userController.create);

export default router;
