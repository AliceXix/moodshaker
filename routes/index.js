const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");

 
router.get("/", (req, res, next) => {
  res.render("auth/register");
});




module.exports = router;
