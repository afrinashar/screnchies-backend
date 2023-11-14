// routes/cart.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/addToCart/:productId', cartController.addToCart);
router.get('/', cartController.viewCart);
router.delete('/removeFromCart/:productId', cartController.removeFromCart);
router.put('/updateCart/:productId', cartController.updateCart);

module.exports = router;
