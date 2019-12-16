const fs = require("fs");
const path = require("path");
const bcrypt = require("../server/node_modules/bcrypt");

const fpath = path.join(__dirname, "../server", "private", "passwd");

module.exports = function auth(login, passwd) {
    try {
        const users = JSON.parse(fs.readFileSync(fpath));
        const user = users.find(u => u.login === login);
        return user && bcrypt.compareSync(passwd, user.passwd);
    } catch (error) {
        return false
    }
};