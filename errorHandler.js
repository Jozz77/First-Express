const createError = require("http-errors");

function handle404(req, res, next) {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
}


const globalErrorHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

module.exports = { handle404, globalErrorHandler };
