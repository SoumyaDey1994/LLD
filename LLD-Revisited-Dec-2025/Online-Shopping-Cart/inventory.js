class Inventory {
  constructor() {
    this.inventory = new Map();
  }

  getProductById(id) {
    if (this.inventory.has(id)) {
      return this.inventory.get(id);
    }
    console.log(`Product with id ${id} not available`);
    return null;
  }

  addProduct(product, quantity = 1) {
    const productId = product.id;

    if (!this.inventory.has(productId)) {
      this.inventory.set(productId, product);
    } else {
      const targetProduct = this.inventory.get(productId);
      targetProduct.stock = targetProduct.stock + product.stock;
      this.inventory.set(productId, targetProduct);
    }
  }

  changeProductQuantity(product, quantity) {
    const productId = product.id;
    if (this.inventory.has(productId)) {
      const product = this.inventory.get(productId);
      product.stock = product.stock - quantity;
    }
  }

  isProductAvailable(product, reqQuantity) {
    const targetProduct = this.inventory.get(product.id);

    return targetProduct && targetProduct.stock > reqQuantity;
  }

  removeProduct(product) {
    if (this.inventory.has(product.id)) {
      this.inventory.delete(product.id);
      return true;
    }

    console.log(`Product ${product.name} not available in store`);
    return false;
  }
}

module.exports = Inventory;
