class CountryTaxStrategy {
    static ind(amount) {
        return amount * 0.30; // 30% tax
    }

    static usa(amount) {
        return amount * 0.40; // 40% tax
    }
    
    static eu(amount) {
        return amount * 0.15; // 15% tax
    }
}

class TaxCalculator {
    constructor(strg) {
        this.strategy = strg;
    }

    setStrategy(strg) {
        this.strategy = strg;
    }

    calculate(amount) {
        return this.strategy(amount);
    }
}

// usage
const calc = new TaxCalculator(CountryTaxStrategy.ind);
console.log(`India Tax: ${calc.calculate(1000)}`); // 300

calc.setStrategy(CountryTaxStrategy.usa);
console.log(`USA Tax: ${calc.calculate(1000)}`); // 400

calc.setStrategy(CountryTaxStrategy.eu);
console.log(`EU Tax: ${calc.calculate(1000)}`); // 150
