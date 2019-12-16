const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

const port = 8080;
const msg = `Server is running on port ${port}!`;

const selectFunc = require(path.join(__dirname, "../ex04", "select.js"))
    .selectFunc;
const insertFunc = require(path.join(__dirname, "../ex04", "insert.js"))
    .insertFunc;
const deleteFunc = require(path.join(__dirname, "../ex04", "delete.js"))
    .deleteFunc;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.get("/ex00/balloon.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex00", "balloon.html"));
});

app.get("/ex01/calc.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex01", "calc.html"));
});

app.get("/ex02/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex02", "index.html"));
});

app.get("/ex02/index.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex02", "index.css"));
});

app.get("/ex02/todo.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex02", "todo.js"));
});

app.get("/ex03/ex00bis/balloon.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex03/ex00bis", "balloon.html"));
});

app.get("/ex03/ex01bis/calc.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex03/ex01bis", "calc.html"));
});

app.get("/ex03/ex02bis/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex03/ex02bis", "index.html"));
});

app.get("/ex03/ex02bis/index.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex03/ex02bis", "index.css"));
});

app.get("/ex03/ex02bis/todo.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex03/ex02bis", "todo.js"));
});

app.get("/ex04/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex04", "index.html"));
});

app.get("/ex04/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex04", "index.html"));
});

app.get("/ex04/todo.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../ex04", "todo.js"));
});

app.get("/ex04/api/select", (req, res) => {
    selectFunc(req, res);
});

app.post("/ex04/api/insert", (req, res) => {
    insertFunc(req, res);
});

app.post("/ex04/api/delete", (req, res) => {
    deleteFunc(req, res);
});

app.listen(port, () => console.log(msg));