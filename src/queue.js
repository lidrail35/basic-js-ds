const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 

class Queue {
  constructor(x) {
    this.value = x;
    this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    const item = new Queue(value);
    let temp = this;
    if ( (this.next === null) && 
         (this.value === undefined) ) {
      this.value = item.value;
      this.next = item.next;
    } else {
      while (temp.next) {temp = temp.next}
       temp.next = item;
    }
   return this;
  }

  dequeue() {
    let top_value = this.value;
    if ( this.next!== null ) {
       this.value = this.next.value;
       this.next = this.next.next;
    }  
    return top_value;   
  };
}

module.exports = {
  Queue
};
