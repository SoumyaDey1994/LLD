export class RateLimiterStrategy {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    isReqAllowed(key) {
        return this.strategy.allow(key);
    }
}