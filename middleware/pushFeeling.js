const User = require("../models//User.model");

module.exports = (req, res, next) => {
    console.log(req.session.user)

    User.findById(req.session.user)
    .then( (user) => {
        console.log(user)
        let infos = req.body
        console.log(`>>>>>>>>> ${infos.mood}`)

        user.moods.push(infos.mood)
        user.energyLvls.push(infos.energyLvl)

        console.log(user)
    })

    next()
}