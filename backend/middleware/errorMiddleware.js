const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  // Set error status to 404
  res.status(404);
  // Pass error to next middleware
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Set error status to statusCode if it exists or 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Set error message to err.message if it exists or empty string
  const message = err.message;

  // Check for Mongoose bad ObjectId
  // error.kind is a property of err object that is created by Mongoose when it cannot find a product with the given id in the database
  if (err.name === 'TypeError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }

  // Send status code and error message
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
