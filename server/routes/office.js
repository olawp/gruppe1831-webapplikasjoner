import express from 'express';
import { officeController } from '../controllers/index.js';

const router = express.Router();

router.get('/', officeController.list);
router.get('/:id', officeController.get);
router.post('/', officeController.create);

export default router;
