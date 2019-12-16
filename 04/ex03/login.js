const auth = require("./auth");

module.exports = (req, res) => {
    const { login, passwd } = req.query;
    const sess = req.session;
    if (auth(login, passwd)) {
        sess.logged_on_user = login;
        res.status(200).send("OK\n");
    } else {
        sess.logged_on_user = "";
        res.status(401).send("ERROR\n");
    }
};