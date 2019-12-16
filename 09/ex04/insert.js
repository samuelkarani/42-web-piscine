const fs = require("fs");
const path = require("path");

module.exports.insertFunc = (req, res) => {
    var data = req.body.text;
    var list = fs.readFileSync(path.join(__dirname, "list.csv")).toString();
    if (list === "") {
        list = "0;" + data;
    } else {
        var arr = list.split(",");
        list =
            list +
            "," +
            (parseInt(arr[arr.length - 1].split(";")[0]) + 1) +
            ";" +
            data;
    }
    fs.writeFileSync(path.join(__dirname, "list.csv"), list);
    res.status(200);
    res.end();
};