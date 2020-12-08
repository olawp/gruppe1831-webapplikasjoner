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

/*
I login kunne vi også satt alle responskoder til "Feil passord eller mail" og responsekoden til 404.
I en mer realistisk situasjon vil man kanskje ikke fortelle brukeren at det finnes en bruker som denne mailen knyttet til seg, av sikkerhetsmessige grunner.
I dette tilfellet har vi bestemt å returnere hva som er galt, for enklere bruk/debugging
*/

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll ut epost og passord', 400));
  }

  const user = await userService.getUserByEmail({ email }, true);

  if (!user) {
    return next(new ErrorHandler('Eposten er ikke gyldig', 400));
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
