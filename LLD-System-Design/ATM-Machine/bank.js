class Bank {
    static #instance;
    constructor() {
        if(Bank.#instance) {
            throw new Error("Bank is singleton, please use getInstance() method");
        }
        this.users = {}
    }

    addUser(card, userAccount) {
        this.users[card.cardNo] = {card, userAccount};
    }

    validateCard(card, pin) {
        const user = this.users[card.cardNo];
        if(user && user?.card?.pin === pin) {
            return user;
        } else {
            return null;
        }
    }
    getInstance() {
        if(!Bank.#instance) {
            Bank.#instance = new Bank();
        }
        return Bank.#instance;
    }
}

module.exports = Bank;