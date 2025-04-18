const Bank = require("./bank");
const Card = require("./card");
const UserAccount = require("./userAccount");
const ATM = require("./atm");
const CashDispenser = require("./cashDispenser");

// Create a bank and a few accounts
// Bank should be SingleTon
const bank = new Bank();
const card1 = new Card('123456789', '1234');
const userAccount1 = new UserAccount('ACC001', 500);
bank.addUser(card1, userAccount1);

const card2 = new Card('987654321', '5678');
const userAccount2 = new UserAccount('ACC002', 1000);
bank.addUser(card2, userAccount2);

// Create an ATM with some cash
// CashDispender should be singleton
const cashDispenser = new CashDispenser(1000);
const atm = new ATM(bank, cashDispenser);

// Insert card and perform transactions
atm.insertCard(card1, '1234');  // Correct PIN
atm.checkBalance();             // Check balance
atm.withdraw(100);              // Withdraw $100
atm.displayTransactionHistory();// Show transaction history
atm.checkBalance();             // Check balance
atm.pinChange('1234', '2468')
atm.endSession();               // End session

// Another session with a different user
atm.insertCard(card2, '5678');  // Correct PIN
atm.checkBalance();             // Check balance
atm.withdraw(500);              // Withdraw $500
atm.displayTransactionHistory();// Show transaction history
atm.checkBalance();             // Check balance
atm.withdraw(500);              // Withdraw $500
atm.endSession();               // End session
