class Payment {
    constructor() {
        this.amount = 0;
    }

    insertCash(cash) {
        this.amount = this.amount + cash.value;
        console.log(`Current Amount Available: ${this.amount}`);
    }

    isAmountSufficient(price) {
        return this.amount >= price;
    }

    deductAmount(price) {
        this.amount = this.amount - price;
    }

    returnChange(price) {
        return this.amount - price;
    }

    reset() {
        this.amount = 0;
    }
}

module.exports = Payment;
