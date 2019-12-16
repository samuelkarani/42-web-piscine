const fs = require("fs");
const path = require("path");

const dpath = path.join(__dirname, "../server", "private");
const fpath = path.join(__dirname, "../server", "private", "chat");

module.exports = (req, res) => {
    const login = req.session.logged_on_user;
    if (login) {
        if (!fs.existsSync(fpath)) {
            if (!fs.existsSync(dpath)) fs.mkdirSync(dpath);
            fs.writeFileSync(fpath, JSON.stringify([]));
        }
        const messages = JSON.parse(fs.readFileSync(fpath));
        messages.sort((a, b) => new Date(a.time) - new Date(b.time));
        const timeFormat = time => `${time.getHours()}:${time.getMinutes()}`;
        const format = ({ time, login, msg }) =>
            `[${timeFormat(new Date(time))}] <b>${login}</b>: ${msg}`;
        res.send(`<html><body>${messages.map(format).join("<br />")}</body></html>`);
        return;
    }
    res.status(401).send("ERROR\n");
};