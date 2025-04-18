/**
 * The Strategy Pattern allows you to define a family of algorithms, 
 * encapsulate each one as a strategy, and make them interchangeable. 
 * The client can switch between different strategies at runtime.
 */
class Payment {

    pay(amount) {
        throw new Error("This method should be implemented by subclasses");
    }
}

class UpiPayemnt extends Payment{
    constructor(upiId) {
        super();
        this.upiId = upiId;
    }

    pay(amount) {
        console.log(`Payment of ${amount} done by ${this.upiId} using UPI.`);
    }
}

class CreditCardPayment extends Payment {
    constructor(cardNumber, cardHolderName) {
        super();
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }

    pay(amount) {
        console.log(`Payment of ${amount} done by ${this.cardHolderName} using Credit card.`);
    }
}

class DebitCardPayment extends Payment {
    constructor(cardNumber, cardHolderName, pin) {
        super();
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.pin = pin;
    }

    pay(amount) {
        console.log(`Payment of ${amount} done by ${this.cardHolderName} using Debit card.`);
    }
}

class PaymentContext {

    setPaymentMode(paymentMode) {
        this.paymentMode = paymentMode;
    }

    pay(amount) {
        if(this.paymentMode) {
            this.paymentMode.pay(amount);
        } else {
            throw new Error("No payment mode is set, please set one & retry payment");
        }
    }
}

/**
 * Cleint Code
 */
const upi = new UpiPayemnt('asdre@okicici');
const creditCard = new CreditCardPayment(123098, 'Soumya Kanta Dey');
const debitCard = new DebitCardPayment(98761234, 'Roger Federer');

const paymentContext = new PaymentContext();

// paymentContext.pay(25000);

paymentContext.setPaymentMode(creditCard);
paymentContext.pay(10000);

paymentContext.setPaymentMode(upi);
paymentContext.pay(2000);

paymentContext.setPaymentMode(debitCard);
paymentContext.pay(5000);