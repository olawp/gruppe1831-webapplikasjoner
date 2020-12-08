/**
 * @author Ola Wethal Petersen
 * @desc Routes for kategoridata. Bestemmer hvor kategoridataen skal sendes.
 * @exports router
 */

import express from 'express';
// eslint-disable-next-line import/named
import { categoryController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', categoryController.get);
router.get('/', categoryController.list);
router.post('/', categoryController.create);

export default router;
