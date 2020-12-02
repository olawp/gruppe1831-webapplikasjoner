import { categoryService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(new ErrorHandler('Finner ikke artikkel', 404));
  }
  res.status(201).json(category);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.listCategories();
  res.status(200).json(category);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});
