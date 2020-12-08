/**
 * @author Ola Wethal Petersen
 * @desc Routes for bildedata. Bestemmer hvor dataen skal sendes.
 * @exports router
 */

import express from 'express';
// eslint-disable-next-line import/named
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

router.post('/upload', upload, imageController.create);
router.get('/download/:id', imageController.get);

export default router;
