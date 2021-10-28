const router = require("express").Router();
const User = require("../models//User.model");
const Activity = require("../models/Activity.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const isAuthor = require("../middleware/isAuthor");
const pushFeeling = require("../middleware/pushFeeling");
const pushActivity = require("../middleware/pushActivity");


router.get("/mood-shaker", isLoggedIn, (req, res, next)=>{
  console.log(req.session.user)
  res.render("questions")
});


router.get("/mood-giver", isLoggedIn, (req, res, next) => {
  
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
      const authorIsUser = req.user._id == activityFromDB.author.id
      res.render("details", { activityFromDB, authorIsUser} )
    })
    .catch((err)=>{
      console.log("error display details activity from DB", err);
    })
});

router.post("/activities/:id/details", isLoggedIn, (req, res, next)=>{
  User.findByIdAndUpdate(req.session.user._id, { $push: {activities: req.params.id}}, { 'new': true})
     .then(() => {

      res.redirect("/mood-shaker")

     })
});

router.post("/activities/:id/delete", isLoggedIn, isAuthor, (req, res, next)=>{
  Activity.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      throw console.error(err);
    } else {
      res.redirect("/activities");
    }
  });
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
    res.render("created-activities", {data: createdActivitiesByUserFromDB})
  })
    .catch(err => {
      console.log(`An error has occured rendering the activities created by the user: ${err}`)
    })
});


router.get("/activities/create", isLoggedIn, (req, res, next)=>{
    
  let user = req.session.user

  res.render("create", {data: user})
  })


router.post("/activities/create", isLoggedIn, (req, res, next)=>{
  
  const { author, mood, energyLvl, title, description } = req.body

  Activity.create({author, mood, energyLvl, title,description})
  .then( () => {
    res.redirect("/mood-shaker")
  })
    .catch((err) => {
      console.log(`an error occured sending the data from form to db: ${err}`)
    })
});


router.get("/activity/:id/edit", isLoggedIn, isAuthor, (req, res, next) => {
  Activity.findById(req.params.id)
    .then(((activityDetailsFromDB) => {
      
      let user = req.session.user

      res.render("edit", { activityDetailsFromDB, /*user*/ })
    }))
    .catch(err => {
      console.log(`An error has occured: ${err}`)
      next(err);
    })
})


router.post("/activity/:id/edit", isLoggedIn, isAuthor, (req, res, next)=>{

  const { author, mood, energyLvl, title, description } = req.body;
  const newDetails = { author, mood, energyLvl, title, description };

  Activity.findByIdAndUpdate(req.params.id, newDetails, {new: true })
  .then(()=> {
    res.redirect("/mood-shaker")
  })
  .catch((err)=>{
    console.log("error getting activity details from DB");
  })
});


router.get('/discover', (req, res, next) => {
  res.render("discover")
})

module.exports = router;
