const router = require("express").Router();
const fs = require("fs");
const path = require("path");

function formatSale({ login, item, count, total }) {
    return `<tr>
    <td>${login}</td>
    <td>${item}</td>
    <td>${count}</td>
    <td>${total}</td>
  </tr>`;
}

function formatUser({ login, passwd, isAdmin }) {
    return `<tr>
    <td>${login}</td>
    <td>${passwd}</td>
    <td>${isAdmin}</td>
  </tr>`;
}

function formatProduct({ name, price, image }) {
    return `<tr>
    <td>${name}</td>
    <td>${price}</td>
    <td>${image}</td>
  </tr>`;
}

function checkAdmin(req, res, next) {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).end("UNAUTHORIZED\n");
    }
}

router.get("/", checkAdmin, (req, res) => {
    res.send(`<html><body>
    <a href="/">home</a>
    <br />
    <a href="/admin/products"> products </a>
    <a href="/admin/users"> users </a>
    <a href="/admin/sales"> sales </a>
    </body></html>`);
});

router.get("/sales", checkAdmin, (req, res) => {
    const salesPath = path.join(__dirname, "sales.json");
    if (!fs.existsSync(salesPath)) {
        fs.writeFileSync(salesPath, JSON.stringify([]));
    }
    const sales = JSON.parse(fs.readFileSync(salesPath));
    res.send(
        `<html><body>
        <table>
            <tr>
                <th>login</th>
                <th>item</th>
                <th>count</th>
                <th>total</th>
            </tr>
            ${sales.map(formatSale).join("")}
        </table>
        </html></body>`
    );
});

router.get("/users", checkAdmin, (req, res) => {
    const usersPath = path.join(__dirname, "../users/users.json");
    if (!fs.existsSync(usersPath)) {
        fs.writeFileSync(usersPath, JSON.stringify([]));
    }
    const users = JSON.parse(fs.readFileSync(usersPath));
    res.send(
        `<html><body>
        <table>
            <tr>
                <th>login</th>
                <th>password</th>
                <th>is admin</th>
            </tr>
            ${users.map(formatUser).join("")}
        </table>
        </html></body>`
    );
});

router.get("/products", checkAdmin, (req, res) => {
    const productsPath = path.join(__dirname, "../products/products.json");
    if (!fs.existsSync(productsPath)) {
        fs.writeFileSync(productsPath, JSON.stringify([]));
    }
    const products = JSON.parse(fs.readFileSync(productsPath));
    res.send(
        `<html><body>
        <table>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>image</th>
            </tr>
            ${products.map(formatProduct).join("")}
        </table>
        </html></body>`
    );
});

module.exports = router;