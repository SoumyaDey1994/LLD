const Inventory = require("./inventory");
const Payment = require("./payment");

class ShoppingCart {
  constructor(inventory) {
    this.inventory = inventory;
    this.items = [];
  }

  addItem(cartItem) {
    this.items.push(cartItem);
  }

  setQuantity(id, quantity) {
    const product = this.inventory.getProductById(id);
    const cartItem = this.items.find(item => item.product.id === id);
    if (product && cartItem && this.inventory.isProductAvailable(product, quantity)) {
      const prevQuantity = cartItem.getQuantity();
      this.inventory.changeProductQuantity(product, quantity - prevQuantity);
      cartItem.setQuantity(quantity);
      return true;
    }

    console.log(`Product ${product.name} doesn't have sufficient stock`);
    return false;
  }

  displayCart() {
    console.log(`..........Displaying cart items: .......`);
    for (let item of this.items) {
      console.log("Item: ", item.product.name);
    }

    const totalAmount = Payment.calculateTotalAmount(this.items);
    console.log(`Total Payable: INR ${totalAmount}`);
    return true;
  }
}

module.exports = ShoppingCart;
