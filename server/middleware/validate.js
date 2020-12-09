import { validationError } from '../utils/validation.js';

export const validateField = (schema) => async (req, res, next) => {
  const validationErrors = await validationError(schema, req.body, res);
  if (!validationErrors) {
    next();
  }
};
