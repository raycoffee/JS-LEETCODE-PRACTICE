// Given the head of a linked list, rotate the list to the right by k places.

// Example:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let tail = head;
  let length = 1;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head;

  let rotate = length - (k % length);

  for (let i = 0; i < rotate; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;
};
