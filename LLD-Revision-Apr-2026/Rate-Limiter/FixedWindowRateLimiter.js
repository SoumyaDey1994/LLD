import { RateLimiter } from "./RateLimiter.js";

export class FixedWindowRateLimiter extends RateLimiter {
  constructor(limit, delay) {
    super(limit, delay);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();
    const windowStart = currTime - (currTime % this.delay);

    if (!this.store.has(key)) {
      this.store.set(key, {
        countOfReq: 1,
        windowStart: windowStart,
      });
      console.log(`First req for key ${key}, allowed`);
      return true;
    }

    const record = this.store.get(key);
    if (record.windowStart !== windowStart) {
      record.countOfReq = 0;
      record.windowStart = windowStart;
    }

    if (record.countOfReq >= this.limit) {
      console.log(`Too many requests, returing 429 error`);
      return false;
    }

    this.store.set(key, {
      ...record,
      countOfReq: record.countOfReq + 1,
    });
    console.log(`Request ${record.countOfReq + 1} Allowed`);
    return true;
  }
}
