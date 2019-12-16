module.exports = (req, res) => {
    try {
        const q = req.query;
        if (q.action === 'get' && q.name)
            res.send(req.cookies[q.name]);
        else if (q.action === 'set' && q.name && q.value)
            res.cookie(q.name, q.value).send();
        else if (q.action === 'del' && q.name)
            res.clearCookie(q.name).send();
        else
            throw 'error';
    } catch (error) {
        res.send('Invalid Parameter');
    }
}