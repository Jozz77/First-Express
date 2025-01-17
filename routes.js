const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const formRouter = require("./routes/form");
const birds = require("./birds");

const configureRoutes = (app) => {
  app.use("/", indexRouter);
  app.use("/api", usersRouter);
  app.use("/about", aboutRouter);
  app.use("/form", formRouter);
  app.use("/birds", birds);
};

module.exports = configureRoutes;
