const createError = require("http-errors");

const handle404 = (req, res, next) => {
  next(createError(404));
};

const globalErrorHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

module.exports = { handle404, globalErrorHandler };
