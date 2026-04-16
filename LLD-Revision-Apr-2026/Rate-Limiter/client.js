import { FixedWindowRateLimiter } from "./FixedWindowRateLimiter.js";
import { SlidingWindowRateLimiter } from "./SlidingWindowRateLimiter.js";
import { RateLimiterStrategy } from "./RateLimiterStrategy.js";
import { TokenBucketRateLimiter } from "./TokenBucketRateLimiter.js";

const fixedWindowRl = new FixedWindowRateLimiter(5, 1000);
const slidingWindowRl = new SlidingWindowRateLimiter(5, 1000);
const tokenBucketRl = new TokenBucketRateLimiter(30, 1000);

const strategy = new RateLimiterStrategy();
strategy.setStrategy(fixedWindowRl);

const reqKey = "/users";
// Fixed Window RL execution
// setInterval(() => strategy.isReqAllowed(reqKey), 100);

strategy.setStrategy(slidingWindowRl);
// Slinding Window RL execution
// setInterval(() => strategy.isReqAllowed(reqKey), 150);

const reqKey2 = "apiKey09823721656";
strategy.setStrategy(tokenBucketRl);
// Token Bucket RL execution
setInterval(() => strategy.isReqAllowed(reqKey2), 500);
