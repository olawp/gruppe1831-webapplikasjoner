/**
 * @author Ola Wethal Petersen
 * @desc User controller. Definerer hvordan vi skal behandle bruker data.
 * @exports create
 */

// eslint-disable-next-line import/named
import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
});
