/**
 * @author Ola Wethal Petersen
 * @desc Authorization controller. Definerer hvordan brukerdata og autorisering skal behandles. 
 * @exports login logout currentUser
 */

import catchAsyncErrors from '../middleware/catchAsync.js';
// eslint-disable-next-line import/named
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll ut epost og passord', 400));
  }

  const user = await userService.getUserByEmail({ email }, true);

  if (!user) {
    return next(new ErrorHandler('Eposten finnes ikke', 400));
  }

  const passwordMatch = await user.comparePassword(password);

  if (!passwordMatch) {
    return next(new ErrorHandler('Feil passord', 400));
  }

  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: 'Logged out',
  });
});

export const currentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    return next(new ErrorHandler('Finner ikke brukeren', 404));
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
