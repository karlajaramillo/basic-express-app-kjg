// router to manage routes
const router = require("express").Router();
// import the controllers or methods to handle routes
// by default index is taken --> require("../controllers/)
const { getHome, getPrivate } = require("../controllers/index");

/* GET home page */
router.get("/", getHome)
      .get("/private", getPrivate);

module.exports = router;