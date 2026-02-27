export class Product {
    constructor(id, name, stockQty=1, unitPrice) {
        this.id = id;
        this.name = name;
        this.stockQty = stockQty;
        this.unitPrice = unitPrice;
    }

    setPrice(price) {
        this.unitPrice = price;
    }

    setStockQty(qty) {
        this.stockQty = qty;
    }
}