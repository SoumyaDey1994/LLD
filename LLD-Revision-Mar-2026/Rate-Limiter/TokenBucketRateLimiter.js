export class TokenBucketRateLimiter {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.refillRatePerSec = refillRatePerSec;
    this.store = new Map();
  }

  allow(key) {
    if (!this.store.has(key)) {
      this.store.set(key, {
        limit: this.capacity - 1, // as 1 token is getting used here
        lastRefill: Date.now(),
      });
      console.log(
        `Request ${key} is allowed, remaing capacity: ${this.capacity - 1}`,
      );
      return true;
    }

    const value = this.store.get(key);
    const lastRefill = value.lastRefill;
    let limit = value.limit;

    const timeElapsedInSec = (Date.now() - lastRefill) / 1000;
    limit = Math.min(
      this.capacity,
      (limit + timeElapsedInSec * this.refillRatePerSec).toFixed(2),
    );

    if (limit < 1) {
      console.log(`Too many requests against key ${key}`);
      return false;
    }

    this.store.set(key, {
      limit: limit - 1,
      lastRefill: Date.now(),
    });

    console.log(`Request ${key} is allowed, remaing capacity: ${limit - 1}`);
    return true;
  }
}
