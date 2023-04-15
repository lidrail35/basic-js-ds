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



  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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