const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();

const ex00 = require("../ex00/index");
const ex01 = require("../ex01/create");
const ex02 = require("../ex02/modif");
const ex03_login = require("../ex03/login");
const ex03_logout = require("../ex03/logout");
const ex03_whoami = require("../ex03/whoami");
const ex04 = require("../ex04");
const ex04_create = require("../ex04/create");
const ex04_modif = require("../ex04/modif");
const ex04_login = require("../ex04/login");
const ex04_speak = require("../ex04/speak");
const ex04_chat = require("../ex04/chat");
const ex04_logout = require("../ex04/logout");

const secret = "#@SECRET@#";

app.use(cookieParser(secret));
app.use(
    session({
        name: "session",
        secret,
        resave: false,
        saveUninitialized: true
    })
);
app.use(flash());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.get("/j04/ex00/index.js", ex00);

app.all("/j04/ex01/create.js", ex01);

app.all("/j04/ex02/modif.js", ex02);

app.get("/j04/ex03/login.js", ex03_login);
app.get("/j04/ex03/logout.js", ex03_logout);
app.get("/j04/ex03/whoami.js", ex03_whoami);

app.get("/j04/ex04", ex04);
app.all("/j04/ex04/create.js", ex04_create);
app.all("/j04/ex04/modif.js", ex04_modif);
app.post("/j04/ex04/login.js", ex04_login);
app.all("/j04/ex04/speak.js", ex04_speak);
app.get("/j04/ex04/logout.js", ex04_logout);
app.get("/j04/ex04/chat.js", ex04_chat);

const port = 8080;
app.listen(port, () => console.log(`Server running on port ${port}!`));