const fs = require("fs");
const path = require("path");

module.exports.deleteFunc = (req, res) => {
    var data = req.body.index;
    var list = fs.readFileSync(path.join(__dirname, "list.csv")).toString();
    var arr = list.split(",");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].split(";")[0] === data) {
            arr.splice(i, 1);
        }
    }
    fs.writeFileSync(path.join(__dirname, "list.csv"), arr.join());
    res.status(200);
    res.end();
};