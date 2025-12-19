const CacheManager = require("./cacheManager");
const CacheNode = require("./cacheNode");


class CacheSystem {
    static #instance = null;
    constructor() {
        if(CacheSystem.#instance) {
            throw new Error("Unable to instantiate Singleton class, pls use getInstance() method");
        }
        this.manager = new CacheManager();
    }

    static getInstance() {
        if(!CacheSystem.#instance) {
            CacheSystem.#instance = new CacheSystem();
        }

        return CacheSystem.#instance;
    }

    initialize(nodeCount) {
        for(let i=1; i<=nodeCount; i++) {
            this.#addNode(i);
        }
    }

    #addNode(nodeId) {
        const node = new CacheNode(nodeId);
        this.manager.addNode(node);
    }

    setNodeCapacity(nodeId, capacity) {
        const targetNode = this.manager.getNode(nodeId);
        if(!targetNode) {
            console.log(`Node ${nodeId} not found`);
            return false;
        }

        targetNode.setCapacity(capacity);
    }

    get(key) {
        return this.manager.get(key);
    }

    delete(key) {
        return this.manager.delete(key);
    }

    add(key, value) {
        return this.manager.add(key, value);
    }
}

module.exports = CacheSystem;
