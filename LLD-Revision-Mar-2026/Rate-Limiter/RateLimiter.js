export class RateLimiter {
    constructor(limit, timeInMs) {
        this.limit = limit;
        this.timeInMs = timeInMs;
    }
}