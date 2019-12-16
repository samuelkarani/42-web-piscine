const nodeinfo = require('../ex00/node_modules/nodejs-info');

module.exports = (req, res) => {
    res.send(nodeinfo({}));
}