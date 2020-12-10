/** 
 * @author Ola Wethal Petersen
 * @desc Mellomvare for å displaye database validaringfeil på frontenden
 * @exports validateField
 */

import { validationError } from '../utils/validation.js';

export const validateField = (schema) => async (req, res, next) => {
  const validationErrors = await validationError(schema, req.body, res);
  if (!validationErrors) {
    next();
  }
};
