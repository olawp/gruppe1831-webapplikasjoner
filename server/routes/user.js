import express from 'express';
// eslint-disable-next-line import/named
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/', userController.create);

export default router;
