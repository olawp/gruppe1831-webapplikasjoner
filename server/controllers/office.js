import { officeService }  from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const offices = await officeService.listOffice(req.params.id);
  res.status(200).json(offices);
});
