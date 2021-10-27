const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");


router.get("/mood-shaker", isLoggedIn, (req, res, next)=>{
  res.render("questions")
});

let moodQuery
let energyQuery

router.get("/mood-giver", isLoggedIn, (req, res, next) => {

  moodQuery = req.query.mood
  energyQuery = req.query.energyLvl

  Activity.find()
    .then((allActivitiesFromDB) => {
      newArr = []
      allActivitiesFromDB.forEach(elm => {
        if (elm.mood === moodQuery && elm.energyLvl == energyQuery) {
          newArr.push(elm)
        }
      })
      return newArr
    })
    .then((activitiesToShow) => {
      res.render('activities', { data: activitiesToShow })
    })
    .catch((err) => {
      console.log(`Error doing this shit: ${err}`)
    })
});


router.get("/activities", isLoggedIn, (req, res, next)=>{
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
  .populate('author')
  .then((activityFromDB)=>{
    console.log({ data: activityFromDB, energyQuery, moodQuery })
    res.render("details", { data: activityFromDB, energyQuery, moodQuery}, )
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
  .catch(err => {
    console.log(`An error has occured rendering the dashboard: ${err}`)
  })
});

router.get("/user/:id/created-activities", isLoggedIn, (req, res, next)=>{
  Activity.find({ author: req.params.id})
    .then((createdActivitiesByUserFromDB)=>{
      console.log('>>>>>>>>>>' , createdActivitiesByUserFromDB[0].author)

    res.render("created-activities", {data: createdActivitiesByUserFromDB})
  })
    .catch(err => {
      console.log(`An error has occured rendering the activities created by the user: ${err}`)
    })
});

router.get("/activities/create", isLoggedIn, (req, res, next)=>{
    res.render("create")
  })

router.post("/activities/create", isLoggedIn, (req, res, next)=>{
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
