const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("this is homepage");
});

router.post("/", (req, res, next) => {
  const {
    name,
    username,
    mail,
    password
  } = req.body

  User.create({
    name,
    username,
    mail,
    password
  })
  .then(()=>{
    res.redirect("/login");
  })
  .catch((err)=>{
    console.log("an error as occured saving user to DB", err);
  })

  
});

module.exports = router;
