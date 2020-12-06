// eslint-disable-next-line import/named
import { contactService, userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendMail.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.getContactById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler('Finner ikke kontakskjema', 404));
  }
  res.status(201).json(contact);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.createContact(req.body);
  try {
    await sendMail({
      email: contact.email,
      subject: 'FG Rørlegger Spørsmål',
      message: `Hei ${contact.name},\n\nDu har nylig kontaktet oss med spørsmålet:\n${contact.question}\n\nVi vil svare deg på mail så snart vi er ledige.\n\nMvh.\nFG Rørlegger`,
    });
    await sendMail({
      email: 'FGKontakt@FGRoerlegger.no',
      subject: `Spørsmål fra kunde`,
      message: `Kunden: ${contact.name} (${contact.email}) har stilt spørsmålet:\n${contact.question}`,
    });
  } catch (error) {
    console.log(error);
  }
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
