const express = require("express");
const path = require("path");
const cors = require("cors");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const configureRoutes = require("./routes");
const configureMiddlewares = require("./middlewares");
const { handle404, globalErrorHandler } = require("./errorHandler");

const app = express();
dotenv.config();

const MongoUrl = process.env.MONGO_URL;

// Allow CORS for all origins (not recommended for production)
app.use(cors());

// Or specify the allowed origin (recommended for production)
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // Include cookies if needed
//   })
// );

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Apply middleware configuration
configureMiddlewares(app);

// Configure routes
configureRoutes(app);

// Catch 404 and forward to error handler
app.use(handle404);

// Error handler
app.use(globalErrorHandler);

// Connect to the database
connectDB(MongoUrl);

// Start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
