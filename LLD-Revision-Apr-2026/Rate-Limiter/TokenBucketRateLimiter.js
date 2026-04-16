import { RateLimiter } from "./RateLimiter.js";

export class TokenBucketRateLimiter extends RateLimiter {
  constructor(limit, delay) {
    super(limit, delay);
    this.rateOfRefillPerSec = parseFloat(
      this.delay / (this.limit * 1000),
    ).toFixed(2);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();

    if (!this.store.has(key)) {
      this.store.set(key, {
        limit: this.limit - 1,
        lastRefill: currTime,
      });
      console.log(`First req for key ${key}, allowed`);
      return true;
    }

    const record = this.store.get(key);
    const limit = record.limit,
      lastRefill = record.lastRefill;

    const timeElaspedInSec = (currTime - lastRefill) / 1000;
    const newTokensAdded = timeElaspedInSec * this.rateOfRefillPerSec;
    const newLimit = Math.min(this.limit, parseFloat((limit + newTokensAdded).toFixed(2)));
    // console.log(`New Token: ${newTokensAdded}, time elapsed: ${timeElaspedInSec}, rate: ${this.rateOfRefillPerSec}`);

    if (newLimit < 1) {
      console.log(`Too many requests, returing 429 error`);
      return false;
    }

    this.store.set(key, {
      limit: newLimit - 1,
      lastRefill: Date.now(),
    });

    console.log(`Request Allowed, remaining limit ${newLimit - 1}`);
    return true;
  }
}
