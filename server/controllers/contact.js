import { contactService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.getContactById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler('Finner ikke kontakskjema', 404));
  }
  res.status(201).json(contact);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.createContact(req.body);
  res.status(201).json(contact);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let contact = await contactService.getContactById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler('Finner ikke kontakskjema', 404));
  }
  contact = await contactService.removeContact(req.params.id);
  res.status(204).json(contact);
});
