// controllers/productsController.js
const Product = require('../models/product');

const products = [
  new Product(1, 'Product 1', 10),
  new Product(2, 'Product 2', 20),
  // Add more products as needed
];

exports.getProducts = (req, res) => {
  res.json(products);
};
