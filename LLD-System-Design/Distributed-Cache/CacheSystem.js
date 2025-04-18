const CacheManager = require("./cacheManager");
const CacheNode = require("./cacheNode");

class CacheSystem {
    constructor() {
        this.manager = new CacheManager();
    }

    initialize(nodeCount) {
        for(let i=0; i<nodeCount; i++) {
            const node = new CacheNode(i);
            this.manager.addNode(node);
        }
    }

    setNodeCapacity(nodeId, capacity) {
        const node = this.manager.getNode(nodeId);
        node.setCapacity(capacity);
    }

    addData(key, value) {
        this.manager.add(key, value);
    }

    getData(key) {
        return this.manager.get(key);
    }

    removeData(key) {
        this.manager.remove(key);
    }
}

module.exports = CacheSystem;
