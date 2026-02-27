export class CartItem {
    constructor(product, itemQty) {
        this.product = product;
        this.itemQty = itemQty;
    }

    setQuantity(itemQty) {
        this.itemQty = itemQty;
    }

    getTotalPrice() {
        return this.itemQty * this.product.unitPrice;
    }
}