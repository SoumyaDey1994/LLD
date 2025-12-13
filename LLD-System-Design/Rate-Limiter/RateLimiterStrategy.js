class RateLimiterStrategy {
  allow(key) {
    throw new Error(`This method to be implemented by subclass`);
  }
}

module.exports = RateLimiterStrategy;
