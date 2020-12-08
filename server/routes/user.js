/**
 * @author Ola Wethal Petersen
 * @desc Routes for brukedata. Bestemmer hvor dataen skal sendes.
 * @exports router
 */
import express from 'express';
// eslint-disable-next-line import/named
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/', userController.create);

export default router;
