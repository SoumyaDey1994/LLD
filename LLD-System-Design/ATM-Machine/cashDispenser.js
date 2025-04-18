class CashDispender {
    static #instance;
    constructor(dispenseBal) {
        if(CashDispender.#instance) {
            throw new Error("CashDispender is singleton, please use getInstance() method");
        }
        this.dispenseBal = dispenseBal;
    }

    dispenseCash(amount) {
        if(amount < this.dispenseBal) {
            console.log(`Amount ${amount} is dispensed successfully`);
            this.dispenseBal = this.dispenseBal - amount;
            console.log(`ATM Cash Value post dispense: ${this.dispenseBal}`);
            return true;
        } else {
            console.log(`Sorry!! Insufficient funds to dispense cash`);
            return false;
        }
    }

    getInstance(dispenseBal) {
        if(!CashDispender.#instance) {
            CashDispender.#instance = new CashDispender(dispenseBal);
        }
        return CashDispender.#instance;
    }
}

module.exports = CashDispender;