export class ShoppingCart {
  constructor(inventory) {
    this.inventory = inventory;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  setQuantity(productId, qty) {
    const product = this.items.find(
      (item) => item.product.id === productId,
    )?.product;
    product.setStockQty(qty);
    return true;
  }

  displayCart() {
    console.log(`.....Display Cart Items.........`);
    for (let item of this.items) {
      const product = item.product;
      const qty = item.itemQty;
      console.log(`Product ${product.name} with quantity ${qty}`);
    }
  }
}
