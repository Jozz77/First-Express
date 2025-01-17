const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const formRouter = require("./routes/form");
const birds = require("./birds");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { error } = require("console");

const app = express();
dotenv.config();

const MongoUrl = process.env.MONGO_URL;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Simple request time logger
app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());

  next();
});

//Middleware function to log request protocol
// app.use('/', function(req, res, next){
//   console.log("A request for things received at " + Date.now());
//   next();
// });

app.use("/", indexRouter);
app.use("/api", usersRouter);
app.use("/about", aboutRouter);
app.use("/form", formRouter);
app.use("/birds", birds);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(MongoUrl)
  .then(() => {
    console.log("DataBase is connected");
    app.listen(3000, () => {
      console.log("Port is running");
    });
  })
  .catch((error) => console.log(error));

module.exports = app;
