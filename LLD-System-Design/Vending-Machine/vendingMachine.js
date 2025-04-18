const Inventory = require("./inventory");
const Payment = require("./payment");

class VendingMachine {
    constructor() {
        this.inventory = new Inventory();
        this.payment = new Payment();
    }

    addProductToMachine(product, quantity) {
        this.inventory.addProduct(product, quantity);
    }

    selectProduct(productName, quantity) {
        const isProductAvailable = this.inventory.isProductAvailable(productName, quantity);
        if(isProductAvailable) {
            const price = this.inventory.getProductPrice(productName) * quantity;
            console.log(`Product ${productName} selected with quanity ${quantity}, Total Price: ${price}`);
        } else {
            console.log(`Product ${productName} not availble with quantity ${quantity}`);
        }
    }

    insertCash(cash) {
        this.payment.insertCash(cash);
    }

    completeTransaction(productName, quantity) {
        const totalPrice = this.inventory.getProductPrice(productName) * quantity;
        if (this.payment.isAmountSufficient(totalPrice)) {
            this.inventory.dispenseProduct(productName, quantity);
            const remAmount = this.payment.amount - totalPrice;
            console.log(`Transaction Completed Successfully, remaining amout: ${remAmount}`);
            this.payment.deductAmount(totalPrice);
        } else {
            console.log(`Unable to purchase ${productName} due to insufficient amount`);
        }
    }

    cancelTransaction() {
        const refundAmount = this.payment.amount;
        console.log(`Transaction cancelled.`);
        if(refundAmount > 0) {
            console.log(`Returning change amount ${refundAmount}`);
        }
        this.payment.reset();
    }
}

module.exports = VendingMachine;
