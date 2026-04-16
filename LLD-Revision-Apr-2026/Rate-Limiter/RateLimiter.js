export class RateLimiter {
    constructor(limit, delay) {
        this.limit = limit;
        this.delay = delay;
    }

    allow(key) {
        console.log(`Tobe implemented by child class`);
    }
}