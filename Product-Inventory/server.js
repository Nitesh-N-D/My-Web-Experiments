const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let products = [];
let idCounter = 1;


app.post("/products", (req, res) => {
  const product = {
    id: idCounter++,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity
  };

  products.push(product);
  res.status(201).json(product);
});


app.get("/products", (req, res) => {
  res.json(products);
});


app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (req.body.name) product.name = req.body.name;
  if (req.body.price !== undefined) product.price = req.body.price;
  if (req.body.quantity !== undefined) product.quantity = req.body.quantity;

  res.json({
    message: "Product updated successfully",
    product
  });
});


app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);


  products = products.filter(p => p.id !== id);

  products = products.map((product, index) => ({
    ...product,
    id: index + 1
  }));


  idCounter = products.length + 1;

  res.json({ message: "Product deleted and IDs updated" });
});
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});