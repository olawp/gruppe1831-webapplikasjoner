import { officeService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const offices = await officeService.listOffice(req.params.id);
  res.status(200).json({ success: true, data: offices });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.getOfficeById(req.params.id);
  if (!office) {
    return next(new ErrorHandler('Finner ikke kontor', 404));
  }
  res.status(201).json({ success: true, data: office });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.createOffice(req.body);
  res.status(201).json({ success: true, data: office });
});
