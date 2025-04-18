class CacheNode {
    constructor(id, capacity=3) {
        this.id = id;
        this.store = {};
        this.capacity = capacity;
        this.freqMap = {};
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }

    add(key, value) {
        if(Object.keys(this.store).length >= this.capacity) {
            this.#evictLFU();
        } 
        this.store[key] = value;
        this.freqMap[key] = 1;
        console.log(`Key ${key} added to node ${this.id} successfully`);
    }

    #evictLFU() {
        let leastFreqUsedKey = null;
        let minFreq = Infinity;
        for(let key in this.freqMap) {
            if(this.freqMap[key] < minFreq) {
                minFreq = this.freqMap[key];
                leastFreqUsedKey = key;
            }
        }

        if(leastFreqUsedKey !== null) {
            console.log(`Evicting key ${leastFreqUsedKey} from node ${this.id}`);
            delete this.store[leastFreqUsedKey];
            delete this.freqMap[leastFreqUsedKey];
        }
    }

    get(key) {
        if(this.store[key]) {
            console.log(`Key ${key} found in node ${this.id}`);
            this.freqMap[key] = this.freqMap[key] + 1;
            return this.store[key];
        }
        console.log(`Key ${key} not found in node ${this.id}`);
        return null;
    }

    remove(key) {
        if(this.store[key]) {
            console.log(`Deleting key ${key} from node ${this.id}`);
            delete this.store[key];
            delete this.freqMap[key];
        } else {
            console.log(`Key ${key} not found in node ${this.id}`);
        }
    }
}

module.exports = CacheNode;
