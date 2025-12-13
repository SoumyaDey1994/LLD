class RateLimiter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  allow(key) {
    this.strategy.allow(key);
  }
}

module.exports = RateLimiter;
