/**
 * @author Ola Wethal Petersen
 * @desc Mellomvare for authorization. Gjør så vi kan sjekke om en bruker er autentisert(logget inn) og sjekke om brukeren er autorisert(har tilgang til visse ting)
 * @exports isAuthenticated isAuthorized
 */

import jwt from 'jsonwebtoken';
// eslint-disable-next-line import/named
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorHandler('Ikke logget inn', 401));
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decode.id);
  if (!user) {
    return next(new ErrorHandler('Brukeren eksisterer ikke', 404));
  }

  req.user = user;
  next();
});

export const isAuthorized = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new ErrorHandler('Ingen tilgang', 403));
  }
  next();
};
