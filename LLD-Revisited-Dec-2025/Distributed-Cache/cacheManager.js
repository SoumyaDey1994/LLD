class CacheManager {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  #findNode(key) {
    // formula to select node from set of nodes
    const targetNodeIndex = key.length % this.nodes.length;
    return this.nodes[targetNodeIndex];
  }

  get(key) {
    const node = this.#findNode(key);
    return node.get(key);
  }

  delete(key) {
    const node = this.#findNode(key);
    node.delete(key);
  }

  add(key, value) {
    const node = this.#findNode(key);
    node.add(key, value);
  }

  getNode(id) {
    return this.nodes.find((node) => node.id === id);
  }
}

module.exports = CacheManager;
