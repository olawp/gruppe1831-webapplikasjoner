import { timeService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const times = await timeService.listTimes();
  res.status(200).json(times);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const time = await timeService(req.body);
  res.status(201).json(time);
});
