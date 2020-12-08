/**
 *
 */

import Joi from 'joi';

const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Eposten er ikke gyldig',
    'string.empty': 'Epost må fylles ut',
  }),
  password: Joi.string().min(4).required().messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Passordet må bestå av minst 4 tegn',
    'string.empty': 'Passord må fylles ut',
  }),
};

export const registerSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    ...userSchema,
  })
  .options({ abortEarly: false });

export const loginSchema = Joi.object()
  .keys({
    ...userSchema,
  })
  .options({ abortEarly: false });
