// Example usage:
const Library = require("./library");

// Create library
const library = new Library();

// Add books to library
library.addBook(new Book(1, 'The Hobbit', 'J.R.R. Tolkien'));
library.addBook(new Book(2, '1984', 'George Orwell'));
library.addBook(new Book(3, 'To Kill a Mockingbird', 'Harper Lee'));

// Add members
library.addMember(new Member(1, 'Alice'));
library.addMember(new Member(2, 'Bob'));

// List available books
library.listAvailableBooks();

// Loan a book to a member
library.loanBook(1, 1); // Alice borrows 'The Hobbit'

// List Alice's borrowed books
library.listBorrowedBooks(1);

// Simulate overdue by waiting or setting loan dates manually (for demonstration)

// Return the book and check for fines
library.returnBook(1, 1); // If overdue, fine will be added

// Process fine payment for Alice
library.processFinePayment(1, 5); // Alice pays $5 of her fine

// List available books after the return
library.listAvailableBooks();

// Check for overdue books and calculate fines
library.checkOverdueLoans();
