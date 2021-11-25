function getHome(req, res) {
  res.render("index");
}

function getPrivate(req, res) {
  res.render("private");
}

module.exports = { getHome, getPrivate }