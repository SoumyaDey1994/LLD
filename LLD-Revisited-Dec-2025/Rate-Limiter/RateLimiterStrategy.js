export class RateLimiterStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  allow(key) {
    return this.strategy.allow(key);
  }
}
