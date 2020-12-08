/**
 * @author Ola Wethal Petersen
 * @desc Routes for artikkeldata. Bestemmer hvor artikkeldata skal sendes.
 * @exports router
 */

import express from 'express';
// eslint-disable-next-line import/named
import { articleController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', articleController.get);
router.get('/', articleController.list);
router.post(
  '/',
  [isAuthenticated, isAuthorized('admin')],
  articleController.create
);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.remove);

export default router;
