const express = require('express');
const cookie = require('cookie-parser');
const app = express();

const ex01 = require('../ex01/nodeinfo');
const ex02 = require('../ex02/print_get');
const ex03 = require('../ex03/cookie_crisp');
const ex04 = require('../ex04/raw_text');
const ex05 = require('../ex05/read_img');
const ex06 = require('../ex06/members_only');

const port = 8080;
const msg = `Server is running on port ${port}!`;

app.use(cookie());

app.get('/', (req, res) => {
    res.send(msg);
});

app.get('/j03/ex01/nodeinfo.js', (req, res) => {
    ex01(req, res);
});

app.get('/j03/ex02/print_get.js', (req, res) => {
    ex02(req, res);
});

app.get('/j03/ex03/cookie_crisp.js', (req, res) => {
    ex03(req, res);
});

app.get('/j03/ex04/raw_text.js', (req, res) => {
    ex04(req, res);
});

app.get('/j03/ex05/read_img.js', (req, res) => {
    ex05(req, res);
});

app.get('/j03/ex06/members_only.js', (req, res) => {
    ex06(req, res);
});

app.listen(port, () => console.log(msg));