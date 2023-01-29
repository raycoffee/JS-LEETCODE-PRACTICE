/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let map = new Map();
  let currNodeA = headA;
  let prev = 0;

  while (currNodeA) {
    map.set(currNodeA, { next: currNodeA.next, prev: prev });
    prev = currNodeA;
    currNodeA = currNodeA.next;
  }
  let currNodeB = headB;

  prev = 0;

  while (currNodeB) {
    if (map.has(currNodeB)) {
      if (map.get(currNodeB).next == currNodeB.next) {
        return currNodeB;
      }
    }
    prev = currNodeB;
    currNodeB = currNodeB.next;
  }

  return null;
};
