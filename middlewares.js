const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

const configureMiddlewares = (app) => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  // Simple request time logger
  app.use(function (req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
  });
};

module.exports = configureMiddlewares;
