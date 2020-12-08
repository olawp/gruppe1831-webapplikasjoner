/**
 * @author Ola Wethal Petersen, Marius Wallin
 * @desc Håndterer errorer. Skriver ut en statuscode og en message
 * @exports  ErrorHandler
 */

export default class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
