const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");
const Mood = require("../models/Mood.model");
const EnergyLvl = require("../models/EnergyLvl.model");
const pushActivity = require("../middleware/pushActivity");
const filterActivities = require("../middleware/filterActivities");
 

router.get("/mood-shaker", (req, res, next)=>{
  res.render("questions")
});

router.post("/mood-shaker", (req, res, next)=>{
  res.send("send answers to DB")//TODO
});

router.get("/activities", /*filterActivities*/ (req, res, next)=>{
  Activity.find()
  .then((activitiesFromDB) => {
    res.render("activities", {data: activitiesFromDB})
  })
  .catch(err => {
    console.log(`An error has occured getting activities from DB: ${err}`)
  })
});

router.get("/activities/:id/details", (req, res, next)=>{
  Activity.findById(req.params.id)
  .then((activityFromDB)=>{
    res.render("details", activityFromDB)
  })
  .catch((err)=>{
    console.log("error display details activity from DB", err);
  })
});

router.post("/activities/:id/details", /*pushActivity*/ (req, res, next)=>{
  res.send("save into DB") //TODO
});

router.post("/activities/:id/delete", (req, res, next)=>{
  Activity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/activities")
  })
  .catch((err)=>{
    console.log("error delete activities from DB", err);
  })
});

router.get("/user/:id/dashboard", (req, res, next)=>{
  User.findById(req.params.id)
  .then(()=>{
    // get user.activities/mood/energyLvl from DB
    //TODO
    res.render("dashboard", userInfos)
  })
  .catch()
});

router.get("/user/:id/created-activities", (req, res, next)=>{
  User.findById(req.params.id)
  .then(()=>{
    // get user.created-activities
    //TODO;
    res.render("created-activities", {data: createdActivitiesByUserFromDB})
  })
  .catch()
});

router.get("/create", (req, res, next)=>{
  Mood.find()
  //EnergyLvl.find()
  //TODO: bug to come
  .then  ((moodsFromDB, energyLvlsFromDB) => {
    res.render("create", { data: moodsFromDB })
  })
});

router.post("/create", (req, res, next)=>{
  const {
    author,
    mood,
    energyLvl,
    image,
    title,
    description,
    votes
  } = req.body
  Activity.create({author, mood, energyLvl, image, title,description, votes})
  .then((activityFromDB)=>{
    res.render("create", activityFromDB)
  })
  .catch((err)=>{
    console.log("err getting created activites from DB", err);
  })
});

router.get("/activity/:id/edit", (req, res, next)=>{

  const {
    author,
    mood,
    energyLvl,
    image,
    title,
    description,
    votes
  } = req.body;
  const newDetails = {
    author,
    mood,
    energyLvl,
    image,
    title,
    description,
    votes
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
