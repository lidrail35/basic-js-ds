const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class ListNode {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add_node(rootNode, addNode) {
    if (rootNode.data > addNode.data) {
      if (rootNode.left === null) {
        rootNode.left = addNode;
      } else {
        this.add_node(rootNode.left, addNode);
      }  
    }  
    if (rootNode.data < addNode.data) {
      if (rootNode.right === null) {
        rootNode.right = addNode;
      } else {
        return this.add_node(rootNode.right, addNode);
      }  
    }            
  }

  add(data) {
    const temp = new ListNode(data);
    if (this.node === null) {
      this.node = temp;
    } else {
      this.add_node(this.node, temp);
    }
  }

  has(data) {
    console.log('enter', data);
    let node = this.root();
    if (node === null) {
      return false;
    }

    while (node) {   
      if (node.data === data) return true;
      if (node.data > data ) {
        node = node.left;
      } else {
        if (node.data < data ) { 
          node = node.right; 
        }  
      } 
    }
    return false;
  }

  find(data) {
    let node = this.root();
    if (node === null) {
      return null;
    }

    while (node) {   
      if (node.data === data) return node;
      if (node.data > data ) { node = node.left };
      if (node.data < data ) { node = node.right } 
    }
    return null;
  }

  remove_node(node, data) {
    if (node === null) { return null }

    if (node.data > data) { 
      node.left = this.remove_node(node.left, data);
      return node;
    } else 
    if (node.data < data) { 
      node.right = this.remove_node(node.right, data);
      return node;
    } else {
      if (node.data === data) {
        if ((!node.left) && (!node.right)) { return null}
      }

      if ((!node.left) || (!node.right)) {
        if (node.left === null) {
          node = node.right;
        } else { node = node.left }
        return node;
      }      

      if ((node.left) && (node.right)) {
        let min_data = node.right;
        while (min_data.left) {
          min_data = min_data.left;           
        }
        node.data = min_data.data;
        node.right = this.remove_node(node.right, min_data.data);
        return node;
      }
    }  
  }

  remove(data) {
    return this.remove_node(this.root(), data);
  }
 
  min() {
    let node = this.root();
    if (node === null) {
      return false;
    }

    while (node.left) {   
      node = node.left;
    }  

    return node.data;
  }

  max() {
    let node = this.root();
    if (node === null) {
      return false;
    }

    while (node.right) {   
      node = node.right;
    }  

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};