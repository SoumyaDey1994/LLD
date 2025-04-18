class Lend {
    constructor(book, member, dueDate) {
        this.book = book;
        this.member = member;
        this.dueDate = dueDate;
        this.lendDate = new Date();
        this.returnDate = null;
    }

    markAsReturned() {}

    isOverDue() {

    }

    calculateFine() {}

}

module.exports = Lend;
