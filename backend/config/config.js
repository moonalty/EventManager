const express = require("express");
const path = require("path");
const session = require("express-session");
const isSession = require("../middleware/session");
const sessionConfig = require("./sessionConfig");
const fileUpload = require("express-fileupload");
const cors = require("cors");

module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, "public")));
  app.use(session(sessionConfig));
  app.use(isSession);
  app.use(cors());
  app.use(fileUpload());
};
