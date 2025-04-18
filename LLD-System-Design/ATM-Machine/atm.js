class ATM {
  constructor(bank, cashDispenser) {
    this.bank = bank;
    this.cashDispenser = cashDispenser;
    this.userAccount = null;
  }
  // Authenticate User Account
  insertCard(card, pin) {
    if (!this.userAccount) {
      const user = this.bank.validateCard(card, pin);
      if (user) {
        this.userAccount = user.userAccount;
        console.log(
          `User ${user.userAccount.id} is authenticated successfully`
        );
      }
    } else {
      console.log(
        `Already 1 user session is active, pls end previous session & try again`
      );
    }
  }

  checkBalance() {
    if (this.userAccount) {
      const balance = this.userAccount.getBalance();
      console.log(
        `User ${this.userAccount.id} has remaining A/C balance ${balance}`
      );
      const transaction = {
        type: "balanceCheck",
        time: new Date().getTime(),
      };
      this.userAccount.addTransaction(transaction);
    } else {
      console.log("No user account detected");
    }
  }

  withdraw(amount) {
    if (this.userAccount) {
      const balance = this.userAccount.getBalance();
      if (amount <= balance) {
        const isCashdispenseSuccess = this.cashDispenser.dispenseCash(amount);
        if (isCashdispenseSuccess) {
          this.userAccount.updateBalance(-amount);
          console.log(
            `Amount ${amount} withdrawn successfully by user ${this.userAccount.id}`
          );
          const transaction = {
            type: "withdraw",
            time: new Date().getTime(),
            amount: amount,
          };
          this.userAccount.addTransaction(transaction);
        }
      } else {
        console.log(
          `Unable to withdraw amount ${amount} due to insufficient A/C balance`
        );
      }
    } else {
      console.log("No user account detected");
    }
  }

  displayTransactionHistory() {
    if (this.userAccount) {
      for (let transaction of this.userAccount.transactions) {
        console.log(transaction);
      }
    }
  }

  pinChange(oldPin, newPin) {
    if (!this.userAccount) {
      console.log(`No authenticates user A/C`);
      return null;
    }

    const cardNo = Object.keys(this.bank.users).find(
      (userCard) => this.bank.users[userCard].userAccount.id === this.userAccount.id
    );
    const card = this.bank.users[cardNo]?.card;

    if (card?.pin === oldPin) {
      card.setPin(newPin);
      console.log(`Pin updated successfully for card ${card.cardNo}`);
      return true;
    } else {
      console.log(`Old Pin is incorrect`);
    }
    return false;
  }

  endSession() {
    if (this.userAccount) {
      this.userAccount = null;
      console.log("User session ended successfully");
    } else {
      console.log("No active user session to end");
    }
  }
}

module.exports = ATM;
