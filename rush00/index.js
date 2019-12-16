const express = require("express");
const app = express();
const session = require("express-session");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const users = require("./src/users/index");
const auth = require("./src/auth/index");
const products = require("./src/products");
const admin = require("./src/admin/index");

app.use(express.static("public"));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(
    session({
        name: "session",
        secret: "#@#SESSION_SECRET#@#",
        resave: false,
        saveUninitialized: true
    })
);
app.use((req, res, next) => {
    if (req.session.logged_on_user) {
        try {
            const login = req.session.logged_on_user;
            const users = JSON.parse(
                fs.readFileSync(path.join(__dirname, "src/users/users.json"))
            );
            req.user = users.find(u => u.login === login);
            next();
        } catch (error) {
            res.status(500).end();
        }
    } else {
        next();
    }
});

app.get("/", (req, res) => {
            const html = user => `
<html><body>
    ${
      user
        ? `<b>${user.login}</b> <a href="/auth/logout">logout</a>`
        : `<a href="/auth/login">login</a>`
    }
    <a href="/users/create"> create account</a>
    <a href="/users/modify"> modify account</a>
    ${user ? `<a href="/users/delete"> delete </a>` : ""} <br />
    <a href="/products"> products </a>
    <a href="/admin"> admin </a>
</body></html>`;
  res.send(html(req.user));
});

app.use("/users", users);
app.use("/auth", auth);
app.use("/products", products);
app.use("/admin", admin);

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));