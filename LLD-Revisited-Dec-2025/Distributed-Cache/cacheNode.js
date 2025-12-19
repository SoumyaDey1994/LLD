class CacheNode {
  constructor(id, capacity = 2) {
    this.id = id;
    this.capacity = capacity;
    this.store = new Map();
    this.freq = new Map();
  }

  setCapacity(capacity) {
    this.capacity = capacity;
    console.log(`Capacity of node ${this.id} set to ${capacity}`);
  }

  get(key) {
    if (this.store.has(key)) {
      // increment count of the frequency of use
      this.freq.set(key, this.freq.get(key) + 1);
      return this.store.get(key);
    }
    console.log(`Key ${key} not found in system`);
    return null;
  }

  delete(key) {
    if (this.store.has(key)) {
      // remove key from store as well as from freq map
      this.freq.delete(key);
      this.store.delete(key);
      console.log(`Key ${key} removed successfully`);
      return true;
    }
    console.log(`Key ${key} doesn't exists in system, so can't delete it`);
    return false;
  }

  add(key, value) {
    if (this.store.size >= this.capacity) {
      this.#clearEntries();
    }
    this.store.set(key, value);
    this.freq.set(key, 1);
    console.log(`Key ${key} saved to node ${this.id} successfully`);
  }

  #clearEntries() {
    let minUsedFreq = Infinity;
    let leastUsedKey = null;

    for (let key of this.freq.keys()) {
      const freq = this.freq.get(key);
      if (freq < minUsedFreq) {
        minUsedFreq = freq;
        leastUsedKey = key;
      }
    }

    if (leastUsedKey !== null) {
      // clear entry from store & freq
      console.log(
        `Evicting least used key ${leastUsedKey} with frequency ${minUsedFreq} from node ${this.id}`
      );
      return this.delete(leastUsedKey);
    }
  }
}

module.exports = CacheNode;
