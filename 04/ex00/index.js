module.exports = (req, res) => {
    const sess = req.session;
    const { login, passwd, submit } = req.query;

    if (submit === "OK") {
        sess.login = login;
        sess.passwd = passwd;
    }

    res.set({
        "Content-Type": "text/html"
    });

    const form = `<html><body>
      <form name="index.js" method="get">
        Username: <input type="text" name="login" value="${sess.login || ""}" />
        <br />
        Password: <input type="password" name="passwd" value="${sess.passwd ||
          ""}" />
        <input type="submit" name="submit" value="OK"/>
      </form>
    </body></html>`;

    res.status(200).send(form);
};