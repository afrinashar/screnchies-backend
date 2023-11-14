// controllers/cartController.js
const Cart = require('../models/cart');

const cart = new Cart();

exports.addToCart = (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(p => p.id === productId);

  if (product) {
    cart.addItem(product);
    res.json({ message: 'Product added to cart', cart: cart.items });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.viewCart = (req, res) => {
  res.json(cart.items);
};

exports.removeFromCart = (req, res) => {
  const productId = parseInt(req.params.productId);
  cart.removeItem(productId);
  res.json({ message: 'Product removed from cart', cart: cart.items });
};

exports.updateCart = (req, res) => {
  const productId = parseInt(req.params.productId);
  const quantity = parseInt(req.body.quantity);

  if (!isNaN(quantity) && quantity > 0) {
    cart.updateQuantity(productId, quantity);
    res.json({ message: 'Cart updated', cart: cart.items });
  } else {
    res.status(400).json({ message: 'Invalid quantity' });
  }
};
