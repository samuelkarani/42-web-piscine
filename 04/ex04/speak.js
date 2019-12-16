const fs = require("fs");
const path = require("path");

const dpath = path.join(__dirname, "../server", "private");
const fpath = path.join(__dirname, "../server", "private", "chat");

const html = `<html><body>
    <script>top.frames['chat'].location = '/j04/ex04/chat.js';</script>
  	<form name="create.js" method="post">
  		Message: <input type="text" name="msg" value="" />
  		<input type="submit" name="submit" value="OK" />
		</form>
        </body></html>`;

module.exports = (req, res) => {
    if (req.method === "GET") {
        res.send(html);
        return;
    }
    if (req.method === "POST") {
        const { msg, submit } = req.body;
        const login = req.session.logged_on_user;
        if (login && submit === "OK") {
            if (!fs.existsSync(fpath)) {
                if (!fs.existsSync(dpath)) fs.mkdirSync(dpath);
                fs.writeFileSync(fpath, JSON.stringify([]));
            }
            const messages = JSON.parse(fs.readFileSync(fpath));
            messages.push({ login, msg, time: new Date() });
            fs.writeFileSync(fpath, JSON.stringify(messages));
            res.send(html);
            return;
        }
    }
    res.status(401).send("ERROR\n");
};