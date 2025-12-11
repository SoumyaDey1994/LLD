const PayementProviders = {
    STRIPE: "stripe",
    PAYPAL: "paypal",
    RAZORPAY: "razorpay"
}

class StripePayement {
    pay(amount) {
        console.log(`Paying ${amount} through Stripe`);
    }
}

class PaypalPayement {
    pay(amount) {
        console.log(`Paying ${amount} through Paypal`);
    }
}

class RazorpayPayement {
    pay(amount) {
        console.log(`Paying ${amount} through Razorpay`);
    }
}

class PaymentProviderFactory {
    static getProvider(pr) {
        switch(pr.toLowerCase()) {
            case PayementProviders.STRIPE: return new StripePayement();
            case PayementProviders.PAYPAL: return new PaypalPayement();
            case PayementProviders.RAZORPAY: return new RazorpayPayement();
            default: throw Error(`Unknown provider ${pr}`);
        }
    }
}

const stripe = PaymentProviderFactory.getProvider('stripe');
const paypal = PaymentProviderFactory.getProvider('paypal');
const razorpay = PaymentProviderFactory.getProvider('razorpay');

stripe.pay(1000);
paypal.pay(2000);
razorpay.pay(5000);
