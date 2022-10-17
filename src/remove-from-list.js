const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.log('!', l);
  console.log('+', l.value, l.next);

  let current = l;
 // let next = l.next;
  let prev = l;
  let index = 0;
  
  while (current) {
    //console.log('№', current.value, current.next);
    
    if (current.value === k) {
      if (prev === current) {
        l = current.next;
      } else {
        prev.next = current.next;
      }
      //console.debug('-', current.value);
    }// else console.debug('-', '*');
    prev = current;
    current = current.next;
    //index++;
 }
 console.log('!!', l);
 return l;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
