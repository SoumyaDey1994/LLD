export class CacheNode {
  constructor(id, capacity = 3) {
    this.id = id;
    this.capacity = capacity;
    this.store = new Map();
    this.lastAccessed = new Map();
  }

  setCapacity(capacity) {
    this.capacity = capacity;
  }

  add(key, value) {
    if (this.store.size >= this.capacity) {
      this.#evictLru();
    }

    this.store.set(key, value);
    this.lastAccessed.set(key, Date.now());
    console.log(`Key ${key} saved successfully`);
    return true;
  }

  get(key) {
    if (this.store.has(key)) {
      this.lastAccessed.set(key, Date.now());
      return this.store.get(key);
    }
    console.log(`Key ${key} not found`);
    return null;
  }

  delete(key) {
    if (!this.store.has(key)) {
      console.log(`Key ${key} doesn't exists`);
      return false;
    }

    this.store.delete(key);
    this.lastAccessed.delete(key);
    console.log(`Key ${key} deleted successfully`);
    return true;
  }

  #evictLru() {
    let lastAccessedTimestamp = Infinity,
      targetKey = null;
    for (let [key, lastAccess] of this.lastAccessed) {
      if (lastAccess < lastAccessedTimestamp) {
        lastAccessedTimestamp = lastAccess;
        targetKey = key;
      }
    }
    console.log(`Removing LRU key ${targetKey}`);
    this.store.delete(targetKey);
  }
}
