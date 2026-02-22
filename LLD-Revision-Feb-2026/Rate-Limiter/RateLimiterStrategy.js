export class RateLimiterStrategy {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    isAllowed(reqKey) {
        return this.strategy.allow(reqKey);
    }
}