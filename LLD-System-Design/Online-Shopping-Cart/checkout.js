
class Checkout {
    constructor(inventory, cart) {
        this.inventory = inventory;
        this.cart = cart;
    }

    processCheckout() {
        // console.log(this.cart.cartItems);
        for(let [productId, cartItem] of this.cart.cartItems) {
            const isProductAvailable = this.inventory.isProductAvailable(productId, cartItem.quantity);
            if(!isProductAvailable) {
                console.log(`Product ${product.name} is not available`);
                return false;
            }
        }

        let totalPrice = 0;
        for(let [productId, cartItem] of this.cart.cartItems) {
            this.inventory.reduceStock(productId, cartItem.quantity);
            totalPrice += cartItem.product.price * cartItem.quantity;
        }

        console.log("Cart checkout successful");
        console.log(`Total Amount paid: ${totalPrice}`);
        this.cart.clearCart();
    }
}

module.exports = Checkout;
