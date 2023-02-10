/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let currNode = node,
    prev;

  while (currNode) {
    if (!currNode.next) {
      prev.next = null;
      break;
    }
    currNode.val = currNode.next.val;
    prev = currNode;
    currNode = currNode.next;
  }
};
