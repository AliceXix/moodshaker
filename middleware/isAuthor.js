module.exports = (req, res, next) => {
    if(req.session.user !== activity.author) {
        res.send(`this is an error in the middleware isAuthor, please contact dev team`)
        throw console.error(`this is an error in the isAuthor middleware!!`);
    }
    next();
}