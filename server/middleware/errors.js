import ErrorHandler from '../utils/errorHandler.js';

export default (err, res) => {
  res.status(err.statuscode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack,
  });

  // Finnes ingen production mode atm, så denne biten er relativt useless
  if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (err.name === 'CastError') {
      const message = `Resource not found. Invalid ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    if (err.name === 'ValidatiorError') {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 11000) {
      const message = `Duplicate of ${Object.keys(err.keyValue)}`;
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statuscode).json({
      success: false,
      message: error.message || 'Internal Server Error',
    });
  }
};
