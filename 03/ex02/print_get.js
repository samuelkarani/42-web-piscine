module.exports = (req, res) => {
    let ret = '';
    for (const key in req.query) {
        ret += `${key}: ${req.query[key]}\n`;
    }
    res.send(ret);
}