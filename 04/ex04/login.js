const auth = require("./auth");

const html = `<html><body>  
    <iframe id="chat" name="chat" src="/j04/ex04/chat.js" width="100%" height="550px"></iframe>
    <iframe id="speak" name="speak" src="/j04/ex04/speak.js" width="100%" height="50px"></iframe>
  </body></html>`;

module.exports = (req, res) => {
    const { login, passwd } = req.body;
    const sess = req.session;
    if (auth(login, passwd)) {
        sess.logged_on_user = login;
        res.status(200).send(html);
    } else {
        sess.logged_on_user = "";
        res.status(401).send("ERROR\n");
    }
};