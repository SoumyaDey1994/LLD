class Inventory {
    constructor() {
        this.products = {};
    }

    // Add product to the inventory
    addProduct(product, quantity) {
        if(!this.products[product.name]) {
            this.products[product.name] = { product, quantity };
        } else {
            this.products[product.name].quantity = this.products[product.name].quantity + quantity;
        }
    }

    isProductAvailable(productName, requiredQty) {
        return this.products[productName] && this.products[productName].quantity > requiredQty;
    }

    dispenseProduct(productName, requiredQty) {
        const isProductAvailable = this.isProductAvailable(productName, requiredQty);
        if(isProductAvailable) {
            this.products[productName].quantity = this.products[productName].quantity - requiredQty;
            return true;
        } else {
            return false;
        }
    }

    getProductPrice(productName) {
        return this.products[productName].product.price;
    }
}

module.exports = Inventory;
