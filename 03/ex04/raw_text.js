module.exports = (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body>Hello</body></html>');
}