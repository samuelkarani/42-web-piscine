function checkAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).send("ERROR\n");
    }
}

module.exports = { checkAuth };