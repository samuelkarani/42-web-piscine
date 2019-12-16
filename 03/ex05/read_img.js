const path = require('path');

module.exports = (req, res) => {
    res.set('Content-Type', 'image/png');
    res.sendFile(path.join(__dirname, '../', 'img', '42.png'));
}