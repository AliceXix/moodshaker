const User = require("../models//User.model");

module.exports = (req, res, next) => {


    User.findById(req.session.user)
        .then((user) => {
       
            let infos = req.params.id
            console.log(infos)
            console.log(user)

            user.activities.push(infos)

            console.log(user)

           
        })

    next()
}