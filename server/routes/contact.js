import express from 'express';
// eslint-disable-next-line import/named
import { contactController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', contactController.get);
router.post('/', contactController.create);
router.delete('/:id', contactController.remove);

export default router;
