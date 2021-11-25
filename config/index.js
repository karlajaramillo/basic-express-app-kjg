// We reuse this import in order to have access to the `body` property in requests
const express = require("express");
// Normalizes the path to the views folder
const path = require("path");

function middlewareConfig(app) {
// To have access to `body` property in the request
  // to read the "body" of the request --> req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Tell express where to find public/ Normalize the path to the public folder
  app.use(express.static(path.join(__dirname, "..", "public")));
  // Sets the view engine to handlebars/ tell express what engine to use for views
  app.set("view engine", "hbs");
  // Normalize the path to 'views' folder / tell express where to find the views files
  app.set("views", path.join(__dirname, "..", "views"));
}
// expor the function
module.exports = { middlewareConfig };