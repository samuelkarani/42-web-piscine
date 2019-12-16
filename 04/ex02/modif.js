const fs = require("fs");
const path = require("path");
const bcrypt = require("../server/node_modules/bcrypt");

const fpath = path.join(__dirname, "../server", "private", "passwd");

module.exports = (req, res) => {
    if (req.method === "GET") {
        res.sendFile(path.join(__dirname, "index.html"));
        return;
    }
    if (req.method === "POST") {
        const { login, oldpw, newpw, submit } = req.body;
        if (submit === "OK" && login && oldpw && newpw) {
            try {
                const users = JSON.parse(fs.readFileSync(fpath));
                const user = users.find(u => u.login === login);
                if (user && bcrypt.compareSync(oldpw, user.passwd)) {
                    user.passwd = bcrypt.hashSync(newpw, 10);
                    fs.writeFileSync(fpath, JSON.stringify(users));
                    res.status(200).end("OK\n");
                    return;
                }
            } catch (error) {
                res.status(401).end("ERROR\n");
                return;
            }
        }
    }
    res.status(401).end("ERROR\n");
};