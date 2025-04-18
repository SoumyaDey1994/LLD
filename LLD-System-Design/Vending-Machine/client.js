const VendingMachine = require("./vendingMachine");
const Product = require("./product");
const Cash = require("./cash");

// Example Usage

// Create products
const chips = new Product('Chips', 10);
const soda = new Product('Soda', 20);
const chocolate = new Product('Chocolate', 40);

// Initialize vending machine
const vendingMachine = new VendingMachine();
vendingMachine.addProductToMachine(chips, 1);
vendingMachine.addProductToMachine(soda, 2);
vendingMachine.addProductToMachine(chocolate, 4);

// Simulating user interaction

// User selects a product
vendingMachine.selectProduct('Soda', 1);

// User inserts Cashs
vendingMachine.insertCash(new Cash(20));  // Insert $1
vendingMachine.insertCash(new Cash(10));  // Insert another $1

// Complete the purchase
vendingMachine.completeTransaction('Soda', 1);

// Another transaction
vendingMachine.selectProduct('Chocolate', 2);
vendingMachine.insertCash(new Cash(100));  // Insert $2
vendingMachine.completeTransaction('Chocolate', 2);  // Insufficient funds

// User cancels the transaction
vendingMachine.cancelTransaction();
