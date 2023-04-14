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
  console.log('222', rootNode.value);
  console.log('333', addNode);
  
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
        this.add_node(rootNode.right, addNode);
      }  
    }            
}

add(data) {
  console.log('data', data);
const temp = new ListNode(data);
  if (this.node === null) {
    this.node = temp;
    return;
  } else {
    this.add_node(this.node, temp);
  }
}


  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};