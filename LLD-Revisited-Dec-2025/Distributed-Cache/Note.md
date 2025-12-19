# Distributed Cache – Problem Statement

### Design a distributed in-memory cache system that stores key–value pairs and serves read/write requests with low latency.

### The cache should support basic operations (get, put, delete) and a pluggable eviction policy (e.g., LRU, LFU).

### Data should be partitioned across multiple cache nodes using a configurable hashing strategy, with optional replication for fault tolerance.

### The design should focus on low-level components, extensibility, and correctness, not on infrastructure setup.

