import express from 'express';
// eslint-disable-next-line import/named
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', articleController.get);
router.get('/', articleController.list);
router.post('/', articleController.create);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.remove);

export default router;
