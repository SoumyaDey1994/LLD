class CacheManager {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    getNode(nodeId) {
        return this.nodes.find(node => node.id === nodeId);
    }

    getNodeIndex(key) {
        return key.length % this.nodes.length;
    }

    add(key, value) {
        const nodeIndex = this.getNodeIndex(key);
        const targetNode = this.nodes[nodeIndex];
        targetNode.add(key, value);
    }

    get(key) {
        const nodeIndex = this.getNodeIndex(key);
        const targetNode = this.nodes[nodeIndex];
        return targetNode.get(key);
    }

    remove(key) {
        const nodeIndex = this.getNodeIndex(key);
        const targetNode = this.nodes[nodeIndex];
        targetNode.remove(key);
    }
}

module.exports = CacheManager;
