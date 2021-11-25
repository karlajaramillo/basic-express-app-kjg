const router = require("express").Router();

// require all the controllers or methods to handle routes
// from >controllers>auth.controllers.js
const {
    getSignup,
    getLogin,
     signup,
     login,
} = require("../controllers/auth.controllers.js");

router
  .get("/signup", getSignup) // localhost:3000/signup --> GET Request - execute ->  getSignup()
  .get("/login", getLogin) // localhost:3000/login --> GET Request - execute -> getLogin()
  .post("/signup", signup) // localhost:3000/signup --> POST Request - execute -> signup()
  .post("/login", login) // localhost:3000/login --> POST Request - execute -> login()


// In app.js --> will be required this routes/auth.routes
module.exports = router;

