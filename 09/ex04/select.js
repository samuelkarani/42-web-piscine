const fs = require("fs");
const path = require("path");

module.exports.selectFunc = (req, res) => {
    var list = fs.readFileSync(path.join(__dirname, "list.csv")).toString();
    res.status(200);
    res.end(list);
};