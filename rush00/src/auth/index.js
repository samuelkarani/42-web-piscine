const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const { checkAuth } = require("../shared");

function auth(login, passwd) {
    try {
        const users = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../users/users.json"))
        );
        const user = users.find(u => u.login === login);
        return user && bcrypt.compareSync(passwd, user.passwd);
    } catch (error) {
        return false;
    }
}

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

router.post("/login", (req, res) => {
    const { login, passwd } = req.body;
    const { session } = req;
    if (auth(login, passwd)) {
        session.logged_on_user = login;
        const to = req.query.from === "products" ? "/products" : "/";
        res.redirect(to);
    } else {
        res.status(400).send("ERROR\n");
    }
});

router.get("/logout", checkAuth, (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;