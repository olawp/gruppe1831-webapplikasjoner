import { validate } from '../utils/validation.js';

export const validation = (schema) => async (req, res, next) => {
  console.log(await validate(schema, req.body));
  next();
};
