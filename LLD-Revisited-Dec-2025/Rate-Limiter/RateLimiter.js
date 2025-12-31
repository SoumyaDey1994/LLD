export class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  allow(key) {
    console.log(`This method should be implemented by subclass`);
  }
}
