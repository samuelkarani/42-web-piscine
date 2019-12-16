const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const { checkAuth } = require("../shared");

const USERS_FPATH = path.join(__dirname, "users.json");

router.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "create.html"));
});

router.post("/create", (req, res) => {
    const { login, passwd } = req.body;
    if (login && passwd) {
        if (!fs.existsSync(USERS_FPATH)) {
            fs.writeFileSync(USERS_FPATH, JSON.stringify([]));
        }
        const users = JSON.parse(fs.readFileSync(USERS_FPATH));
        if (!users.find(u => u.login === login)) {
            users.push({
                login,
                passwd: bcrypt.hashSync(passwd, 10),
                isAdmin: false
            });
            fs.writeFileSync(USERS_FPATH, JSON.stringify(users));
            req.session.destroy();
            res.redirect("/auth/login");
            return;
        }
    }
    res.status(400).end("ERROR\n");
});

router.get("/modify", (req, res) => {
    res.sendFile(path.join(__dirname, "modify.html"));
});

router.post("/modify", (req, res) => {
    const { login, oldpw, newpw } = req.body;
    if (login && oldpw && newpw) {
        try {
            const users = JSON.parse(fs.readFileSync(USERS_FPATH));
            const user = users.find(u => u.login === login);
            if (user && bcrypt.compareSync(oldpw, user.passwd)) {
                user.passwd = bcrypt.hashSync(newpw, 10);
                fs.writeFileSync(USERS_FPATH, JSON.stringify(users));
                req.session.destroy();
                res.redirect("/auth/login");
                return;
            }
        } catch (error) {
            res.status(400).end("ERROR\n");
            return;
        }
    }
    res.status(400).end("ERROR\n");
});

router.get("/delete", checkAuth, (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(USERS_FPATH));
        const newUsers = users.filter(u => u.login !== req.user.login);
        fs.writeFileSync(USERS_FPATH, JSON.stringify(newUsers));
        req.session.destroy();
        res.redirect("/");
    } catch (error) {
        res.status(400).end("ERROR\n");
    }
});

module.exports = router;