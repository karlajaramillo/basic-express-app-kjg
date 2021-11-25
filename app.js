//.config() will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
require("dotenv").config();
// app is the instance of express, app is the server
// const express = require('express');
// const app = express();
const app = require("express")();

// Normalizes the path to the views folder
const path = require("path");
// require the hbs for partials
const hbs = require("hbs");

// Handles path, public, views folder, hbs, and read the "body" of the request
// By default it's going to take index--> ./config/index
// require("./config/index")
require("./config").middlewareConfig(app);
// Handles mongodb connection
require("./config/mongodb.config").mongoConnect();

// register partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// routes - render home and private
// By default it's going to take index--> ./routes/index
// require("./routes/index")
const indexRoutes = require("./routes");
app.use("/", indexRoutes);

// auth.routes -> login, signup routes
const authRoutes = require("./routes/auth.routes"); // <== has to be added
app.use('/', authRoutes); // <== has to be added

module.exports = app;