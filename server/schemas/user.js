import Joi from 'joi';

const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Eposten finnes ikke',
    'string.empty': 'Epost må fylles ut',
  }),
  password: Joi.string().min(3).required().messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Passordet er ikke gyldig',
    'string.empty': 'Fyll ut passord',
  }),
};

const registerUserSchema = {
  name: Joi.string().required().messages({
    'any.required': 'Navn på fylles ut',
    'string.name': 'Navnet er på en eller annen måte, ikke gyldig',
    'string.empty': 'Navn må fylles ut',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Eposten er ikke gyldig',
    'string.empty': 'Epost må fylles ut',
  }),
  password: Joi.string().min(3).required().regex(/\d{1}/).messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Passordet må bestå av minst 3 tegn',
    'string.empty': 'Passord må fylles ut',
    'string.pattern.base': 'Passordet må inneholde minst et tall',
  }),
};

export const registerSchema = Joi.object()
  .keys({
    role: Joi.string(),
    ...registerUserSchema,
  })
  .options({ abortEarly: false });

export const loginSchema = Joi.object()
  .keys({
    ...userSchema,
  })
  .options({ abortEarly: false });
