const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
 

router.get("/mood-shaker", isLoggedIn, (req, res, next)=>{
  res.render("questions")
});

router.post("/mood-shaker", isLoggedIn, (req, res, next)=>{
  res.send("send answers to DB")//TODO
});

router.get("/activities", isLoggedIn, /*filterActivities*/ (req, res, next)=>{
  Activity.find()
  .then((activitiesFromDB) => {
    res.render("activities", {data: activitiesFromDB})
  })
  .catch(err => {
    console.log(`An error has occured getting activities from DB: ${err}`)
  })
});


router.get("/activities/:id/details", isLoggedIn, (req, res, next)=>{
  Activity.findById(req.params.id)
  .then((activityFromDB)=>{
    res.render("details", activityFromDB)
  })
  .catch((err)=>{
    console.log("error display details activity from DB", err);
  })
});

router.post("/activities/:id/details", isLoggedIn, /*pushActivity*/ (req, res, next)=>{
  res.send("save into DB") //TODO
});

router.post("/activities/:id/delete", isLoggedIn, (req, res, next)=>{
  Activity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/activities")
  })
  .catch((err)=>{
    console.log("error delete activities from DB", err);
  })
});

router.get("/user/:id/dashboard", isLoggedIn, (req, res, next)=>{
  User.findById(req.params.id)
    .then((userInfos)=>{
    // get user.activities/mood/energyLvl from DB
    //TODO
    res.render("dashboard", userInfos)
  })
  .catch()
});

router.get("/user/:id/created-activities", isLoggedIn, (req, res, next)=>{
  User.findById(req.params.id)
  .then(()=>{
    // get user.created-activities
    //TODO;
    res.render("created-activities", {data: createdActivitiesByUserFromDB})
  })
  .catch()
});

router.get("/create", isLoggedIn, (req, res, next)=>{
    res.render("create")
  })

router.post("/create", isLoggedIn, (req, res, next)=>{
  const {
    author,
    mood,
    energyLvl,
    title,
    description,
  } = req.body
  Activity.create({author, mood, energyLvl, title,description})
  .then((activityFromDB)=>{
    res.render("create", activityFromDB)
  })
  .catch((err)=>{
    console.log("err getting created activites from DB", err);
  })
});

router.get("/activity/:id/edit", isLoggedIn, (req, res, next)=>{

  const {
    author,
    mood,
    energyLvl,
    title,
    description,
  } = req.body;
  const newDetails = {
    author,
    mood,
    energyLvl,
    title,
    description,
  };

  Activity.findByIdAndUpdate(req.params.id, newDetails, {new: true }) //TODO
  .then((activityDetailsFromDB)=>{
    res.render("edit", activityDetailsFromDB)
  })
  .catch((err)=>{
    console.log("error getting activity details from DB");
  })
});

router.get('/discover', (req, res, next) => {
  res.render("discover")
})

module.exports = router;
