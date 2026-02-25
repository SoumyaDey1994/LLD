export class CacheManager {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  getNodeById(id) {
    return this.nodes.find((node) => node.id === id);
  }

  add(key, value) {
    const targetNodeIndex = key.length % this.nodes.length;
    const targetNode = this.nodes[targetNodeIndex];
    return targetNode.add(key, value);
  }

  get(key) {
    const targetNodeIndex = key.length % this.nodes.length;
    const targetNode = this.nodes[targetNodeIndex];
    return targetNode.get(key);
  }

  delete(key) {
    const targetNodeIndex = key.length % this.nodes.length;
    const targetNode = this.nodes[targetNodeIndex];
    return targetNode.delete(key);
  }
}
