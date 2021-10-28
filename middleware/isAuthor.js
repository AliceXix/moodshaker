const Activity = require("../models/Activity.model");

module.exports = (req, res, next) => {
    Activity.findById(req.params.id)
    .then(activityObjectFromDB => {
        if (req.session.user._id !== activityObjectFromDB.author.toString()) {
             res.send(`this is an error in the middleware isAuthor, please contact dev team`)
            return;
        }
    })

    next();
}