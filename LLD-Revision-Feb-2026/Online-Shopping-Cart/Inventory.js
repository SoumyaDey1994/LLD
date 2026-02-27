export class Inventory {
  constructor() {
    this.products = new Map();
  }

  isProductExists(productId) {
    const product = this.products.has(productId);
    return product && product.stockQty > 0;
  }

  getProductById(productId) {
    return this.products.get(productId);
  }

  addProduct(product, quantity = 1) {
    const productId = product.id;
    if (!this.products.has(productId)) {
      product.setStockQty(quantity);
      this.products.set(productId, product);
    } else {
      const product = this.products.get(productId);
      product.setStockQty(product.stockQty + quantity);
      this.products.set(productId, product);
    }
    console.log(`Product ${product.name} added successfully`);
    return true;
  }

  removeProduct(product) {
    const productId = product.id;
    if (!this.products.has(productId)) {
      console.log(`Product ${product.name} doens't exists in inventory`);
      return false;
    }

    this.products.delete(productId);
    console.log(`Product ${product.name} deleted sucessfully`);
    return true;
  }
}
