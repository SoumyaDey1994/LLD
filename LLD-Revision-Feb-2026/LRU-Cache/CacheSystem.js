import { CacheNode } from "./CacheNode.js";
import { CacheManager } from "./CacheManager.js";

export class CacheSystem {
  constructor() {
    this.manager = new CacheManager();
  }

  initialize(noOfNodes) {
    for (let i = 1; i <= noOfNodes; i++) {
      const node = new CacheNode(i);
      this.manager.addNode(node);
    }
  }

  setNodeCapacity(nodeId, capacity) {
    const targetNode = this.manager.getNodeById(nodeId);
    if (!targetNode) {
      console.log(`Node with id ${nodeId} doesn't exists`);
      return false;
    }

    targetNode.setCapacity(capacity);
    console.log(`Node ${nodeId} set with new capacity ${capacity}`);
    return true;
  }

  addData(key, value) {
    return this.manager.add(key, value);
  }

  getData(key) {
    return this.manager.get(key);
  }

  removeData(key) {
    return this.manager.delete(key);
  }
}
