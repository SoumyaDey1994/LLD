class CartItem {
    constructor(product, quantity=1) {
        this.product = product;
        this.quantity = quantity;
    }

    getQuantity() {
        return this.quantity;
    }
    
    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getTotalItemPrice() {
        return this.product.price * this.quantity;
    }
}

module.exports = CartItem;
