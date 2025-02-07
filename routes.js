const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const bookingRouter = require("./routes/booking");


const configureRoutes = (app) => {
  app.use("/", indexRouter);
  app.use("/api", usersRouter);
  app.use("/api", authRouter)
  app.use("/api", bookingRouter);
};

module.exports = configureRoutes;
