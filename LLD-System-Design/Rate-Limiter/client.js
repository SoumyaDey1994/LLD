const FixedWindowRateLimiter = require("./FixedWindowRateLimiter");
const RateLimiter = require("./RateLimiterContext");
const SlidingWindowRateLimiter = require("./SlidingWindowRateLimiter");

const fixedWindowRl = new FixedWindowRateLimiter(3, 5000);
const slidingWindowRl = new SlidingWindowRateLimiter(3, 5000);

let limiter = new RateLimiter(fixedWindowRl);

let counter = 1,
  counter2 = 1;
// const intervalUser = setInterval(() => {
//     if(counter === 15) clearInterval(intervalUser);

//     limiter.allow("user");
//     counter++;
// }, 1000);

limiter = new RateLimiter(slidingWindowRl);
const intervalAgent = setInterval(() => {
  if (counter2 === 15) clearInterval(intervalAgent);

  limiter.allow("agnet");
  counter2++;
}, 1000);
