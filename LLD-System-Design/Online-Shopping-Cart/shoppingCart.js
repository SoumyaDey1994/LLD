const CartItem = require("./cartItem");

class ShoppingCart {
    constructor() {
        this.cartItems = new Map();
    }

    addItem(product, quantity) {
        if(this.cartItems.has(product.id)) {
            const item = this.cartItems.get(product.id);
            item.quantity = item.quantity + quantity;
        } else {
            this.cartItems.set(product.id, new CartItem(product, quantity));
        }
    }

    modifyItemQuantity(productId, quantity) {
        if(this.cartItems.has(productId)) {
            const item = this.cartItems.get(productId);
            item.quantity = quantity;
            console.log(`Product ${productId} quantity updated successfully`);
        } else {
            console.log(`Unable to find product having id ${productId}`);
        }
    }

    clearCart() {
        this.cartItems.clear();
    }

    displayCart() {
        console.log(`......Cart Items Currently......`);
        let totalPrice = 0;
        for(let [productId, cartItem] of this.cartItems) {
            console.log(`Item: ${cartItem.product.name}, Quanity: ${cartItem.quantity}, Price: ${cartItem.quantity * cartItem.product.price}`);
            totalPrice += cartItem.quantity * cartItem.product.price;
        }

        console.log(`Total Amount: ${totalPrice}`);
    }
}

module.exports = ShoppingCart;