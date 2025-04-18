class Inventory {
    constructor() {
        this.products = new Map();
    }

    addProduct(product) {
        if(this.products.has(product.id)) {
            const targetProduct = this.products.get(product.id);
            targetProduct.stock += product.stock;
        } else {
            this.products.set(product.id, product);
        }
    }

    reduceStock(productId, quantity) {
        if(this.products.has(productId)) {
            const targetProduct = this.products.get(productId);
            targetProduct.stock -= quantity;
        } else {
            console.log(`Product having id ${productId} not available in inventory`);
        }
    }

    getProductById(productId) {
        return this.products.get(productId);
    }

    isProductAvailable(productId, quantity) {
        const product = this.products.get(productId);
        if(product && product.stock > quantity) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Inventory;
