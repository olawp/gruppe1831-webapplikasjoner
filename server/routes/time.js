import express from 'express';
// eslint-disable-next-line import/named
import { timeController } from '../controllers/index.js';

const router = express.Router();

router.get('/', timeController.list);
router.post('/', timeController.create);

export default router;
