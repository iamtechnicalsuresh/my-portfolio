import CustomErrorHandler from "../utils/customErrorHandler";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    const message = "Resource not found. Invalid Id.";
    error = new CustomErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    // message,
    message: error.message,
    stack: error.stack,
  });
};
