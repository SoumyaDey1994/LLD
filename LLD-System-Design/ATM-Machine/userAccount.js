class UserAccount {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
        this.transactions = [];
    }

    getBalance() {
        return this.balance;
    }

    updateBalance(amount) {
        this.balance = this.balance + amount;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }
}

module.exports = UserAccount;