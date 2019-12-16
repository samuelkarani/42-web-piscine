const router = require("express").Router();
const fs = require("fs");
const path = require("path");

function find(prodName, products) {
    return products.find(({ name }) => name === prodName);
}

const subtotal = (name, count, products) => {
    const p = find(name, products);
    return p.price * count;
};

function formatProduct({ image, name, price }) {
    return `<div>
    <img src=${image} width="200px" max-height="340px" />
    <p><b>${name}</b> $${price}</p>
    <a href="/products?name=${name}"> add </a>
    </div>`;
}

function formatSelected(selected, products) {
    let total = 0;
    for (const key in selected) {
        const p = find(key, products);
        total += p.price * selected[key];
    }
    return `<div>
    ${Object.entries(selected)
      .map(
        ([name, count]) =>
          `${name}: ${count} = ${subtotal(name, count, products)}`
      )
      .join("<br />")}
    <br\n><b>total</b>: ${total}
    <form method="post">
      <input type="submit" name="submit" value="buy items" />
    </form>
      </div>`;
}

function formatSale({ login, item, count, total }) {
  return `
    <span>${login}</span>
    <span>${item}</span>
    <span>${count}</span>
    <span>${total}</span>
`;
}

const html = (products, selected, sales) => `<html><body>
<link rel="stylesheet" href="styles.css">
  <a href="/"> home </a>
  ${selected ? formatSelected(selected, products) : ""}
  <div>
  ${
    sales.length
      ? `<h3 class="no-margin">history</h3>` +
        sales.map(formatSale).join("<br />")
      : ""
  }
  </div>
  <div class="flex-container">
  ${products.map(formatProduct).join("")}
  </div>
</body></html>`;

router.get("/", (req, res) => {
  const productsPath = path.join(__dirname, "products.json");
  if (!fs.existsSync(productsPath)) {
    fs.writeFileSync(productsPath, JSON.stringify([]));
  }
  const products = JSON.parse(fs.readFileSync(productsPath));
  const salesPath = path.join(__dirname, "../admin/sales.json");
  if (!fs.existsSync(salesPath)) {
    fs.writeFileSync(salesPath, JSON.stringify([]));
  }
  const sales = JSON.parse(fs.readFileSync(salesPath));
  const userSales = req.user
    ? sales.filter(s => s.login === req.user.login)
    : [];
  const { session, query } = req;
  if (query && query.name && find(query.name, products)) {
    const { name } = query;
    if (session.selected) {
      if (name in session.selected) session.selected[name] += 1;
      else session.selected[name] = 1;
    } else {
      session.selected = {
        [name]: 1
      };
    }
    res.redirect("/products");
  } else {
    res.send(html(products, session.selected, userSales));
  }
});

router.post("/", (req, res) => {
  if (!req.user) {
    res.redirect("/auth/login?from=products");
  } else {
    if (req.session.selected) {
      const { session } = req;
      const productsPath = path.join(__dirname, "products.json");
      const salesPath = path.join(__dirname, "../admin/sales.json");
      if (!fs.existsSync(salesPath)) {
        fs.writeFileSync(salesPath, JSON.stringify([]));
      }
      const sales = JSON.parse(fs.readFileSync(salesPath));
      const products = JSON.parse(fs.readFileSync(productsPath));
      for (const key in session.selected) {
        sales.push({
          login: req.user.login,
          item: key,
          count: session.selected[key],
          total: subtotal(key, session.selected[key], products)
        });
      }
      session.selected = null;
      fs.writeFileSync(salesPath, JSON.stringify(sales));
      res.redirect("/products");
      return;
    }
    res.status(400).send("ERROR\n");
  }
});

module.exports = router;