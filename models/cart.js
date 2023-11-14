// models/cart.js
class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      this.items.push(product);
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    }
  
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
  
  module.exports = Cart;
  