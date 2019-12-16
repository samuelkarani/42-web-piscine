const fs = require("fs");
const path = require("path");
const bcrypt = require("../server/node_modules/bcrypt");

const dpath = path.join(__dirname, "../server", "private");
const fpath = path.join(__dirname, "../server", "private", "passwd");

module.exports = (req, res) => {
    if (req.method === "GET") {
        res.sendFile(path.join(__dirname, "index.html"));
        return;
    }
    if (req.method === "POST") {
        const { login, passwd, submit } = req.body;
        if (submit === "OK" && login && passwd) {
            if (!fs.existsSync(fpath)) {
                if (!fs.existsSync(dpath)) fs.mkdirSync(dpath);
                fs.writeFileSync(fpath, JSON.stringify([]));
            }
            const users = JSON.parse(fs.readFileSync(fpath));
            const exists = users.find(u => u.login === login);
            if (!exists) {
                users.push({ login, passwd: bcrypt.hashSync(passwd, 10) });
                fs.writeFileSync(fpath, JSON.stringify(users));
                res.status(200).end("OK\n");
                return;
            }
        }
    }
    res.status(401).end("ERROR\n");
};