module.exports = (req, res) => {
    const sess = req.session;
    if (sess.logged_on_user) {
        res.status(200).end(sess.logged_on_user + "\n");
    } else {
        res.status(401).end("ERROR\n");
    }
};