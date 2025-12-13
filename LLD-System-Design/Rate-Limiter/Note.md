# Rate Limiter – Problem Statement

## Design and implement a rate limiter that controls the number of requests allowed per unique key (e.g., user ID or IP) within a given time window.

### The rate limiter must:

Support two algorithms:

#### Fixed Window: Allows up to N requests per fixed time window

#### Sliding Window (log-based): Allows up to N requests in the last T milliseconds


Expose a common method:
```
allow(key): boolean
```

which returns:
```
true → request allowed

false → request rejected due to rate limit
```
Allow runtime switching between rate-limiting algorithms without changing client code

Maintain request state in-memory, scoped per key

Be single-threaded, synchronous, and non-distributed

## Constraints:
```
No persistence or external storage (e.g., Redis)

No async or network calls

Focus on correctness, extensibility, and clean low-level design
```

## One-Line Summary (Optional)

Implement a pluggable, in-memory rate limiter with fixed and sliding window algorithms and runtime strategy switching.
