// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let beforeLeft = null;
  let current = head;
  let i = 1;

  while (i < left && current !== null) {
    beforeLeft = current;
    current = current.next;
    i++;
  }

  let leftMost = current;
  let prev = current;
  current = current.next;

  while (i < right && current !== null) {
    let pointer = current.next;
    current.next = prev;
    prev = current;
    current = pointer;
    i++;
  }

  leftMost.next = current;

  if (beforeLeft !== null) beforeLeft.next = prev;
  else head = prev;

  return head;
};
