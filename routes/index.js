const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const isAuthor = require("../middleware/isAuthor");
//const pushFeeling = require("../middleware/pushFeeling");


router.get("/mood-shaker", isLoggedIn, (req, res, next)=>{
  console.log(req.session.user)
  res.render("questions")
});


router.get("/mood-giver", isLoggedIn, (req, res, next) => {
  req.session.currUrl = req.originalUrl
  if (typeof req.query.mood === "string") {
    req.query.mood = [req.query.mood]
  }
  Activity.find()
    .then((allActivitiesFromDB) => {

      newArr = []

      allActivitiesFromDB.forEach(elm => {
        for (let k = 0; k < req.query.mood.length; k++) {
          if (elm.mood.includes(req.query.mood[k]) && elm.energyLvl == req.query.energyLvl) {
            if (!newArr.includes(elm)){
              newArr.push(elm)
            }
          }
        }
      })
      return newArr
    })
    .then((activitiesToShow) => {
      res.render('activities', { data: activitiesToShow })
    })
    .catch((err) => {
      console.log(`An error has occured giving tailored results:`, err)
      res.render("general-err", err)
    })

});


router.get("/activities", isLoggedIn, (req, res, next)=>{
  Activity.find()
  .then((activitiesFromDB) => {
    res.render("activities", {data: activitiesFromDB})
  })
    .catch((err) => {
      console.log(`An error has occured getting activities from DB:`, err)
      res.render("general-err", err)
    })
});


router.get("/activities/:id/details", isLoggedIn, (req, res, next)=>{
  const currentUrl = req.session.currUrl
  //req.session.currUrl = ''

  console.log(req.session)
  Activity.findById(req.params.id)
    .populate('author')
    .then((activityFromDB)=>{
      const authorIsUser = req.user._id == activityFromDB.author.id
      res.render("details", { activityFromDB, authorIsUser, currentUrl })
      return currentUrl
    })
    .then((currentUrl) => {
      console.log(currentUrl)
    })
    .catch((err) => {
      console.log(`error display details activity from DB `, err)
      res.render("general-err", err)
    })
});

router.post("/activities/:id/details", isLoggedIn, (req, res, next)=>{
  Activity.findById(req.params.id)
  .then(loggedActivity => {
    console.log(loggedActivity.createdAt)
    return User.findByIdAndUpdate(req.session.user._id, { $push: { activities: loggedActivity.title } }, { 'new': true })
      .then(() => {
        res.redirect(`/activities/${req.params.id}/details`)
      })
      .catch((err) => {
        console.log(`An error has occured logging activity to user in DB:`, err)
        res.render("general-err", err)
      })
  })
    .catch((err) => {
      console.log(`An error has occured logging activity to user in DB:`, err)
      res.render("general-err", err)
    })
});

router.post("/activities/:id/delete", isLoggedIn, isAuthor, (req, res, next)=>{
  Activity.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(`An error has occured deleting activity:`, err)
      res.render("general-err", err)
    } else {
      res.redirect("/activities");
    }
  });
});


router.get("/user/:id/dashboard", isLoggedIn, (req, res, next)=>{
  User.findById(req.params.id)
    .then((userInfos)=>{
    res.render("dashboard", {infos: userInfos})
  })
    .catch((err) => {
      console.log(`An error has occured rendering the dashboard:`, err)
      res.render("general-err", err)
    })
});


router.get("/user/:id/created-activities", isLoggedIn, (req, res, next)=>{
  req.session.currUrl = req.originalUrl
  Activity.find({ author: req.params.id})
    .then((createdActivitiesByUserFromDB)=>{
      res.render("created-activities", { data: createdActivitiesByUserFromDB})
  })
    .catch((err) => {
      console.log(`An error has occured rendering the activities created by the user:`, err)
      res.render("general-err", err)
    })
});


router.get("/activities/create", isLoggedIn, (req, res, next)=>{

  let user = req.session.user

  res.render("create", { data: user})
  })


router.post("/activities/create", isLoggedIn, (req, res, next)=>{
  
  const { author, mood, energyLvl, title, description } = req.body

  const currentUrl = req.session.currUrl
  console.log(currentUrl)
  req.session.currUrl = ''

  Activity.create({author, mood, energyLvl, title,description})
  .then( () => {
    res.redirect(`${currentUrl}`)
  })
  //TODO
    .catch((err) => {
      console.log(`An error occured sending the data from form to DB:`, err)
      res.render("general-err", err)
    })
});


router.get("/activity/:id/edit", isLoggedIn, isAuthor, (req, res, next) => {
  Activity.findById(req.params.id)
    .then(((activityDetailsFromDB) => {
      res.render("edit", { activityDetailsFromDB })
    }))
    .catch((err) => {
      console.log(`An error has occured getting the information about the activity to edit:`, err)
      res.render("general-err", err)
    })
})



router.post("/activity/:id/edit", isLoggedIn, isAuthor, (req, res, next)=>{

  const { author, mood, energyLvl, title, description } = req.body;
  const newDetails = { author, mood, energyLvl, title, description };

  Activity.findByIdAndUpdate(req.params.id, newDetails, {new: true })
  .then(()=> {
    res.redirect(`/activities/${req.params.id}/details`)
  })
  .catch((err) => {
    console.log(`An error has occured getting activity details from DB:`, err)
    res.render("general-err", err)
  })
});


router.get('/discover', (req, res, next) => {
  res.render("discover")
})

module.exports = router;
