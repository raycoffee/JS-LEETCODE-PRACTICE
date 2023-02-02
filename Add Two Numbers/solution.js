/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let nodeA = l1;
  let nodeB = l2;
  let carryOver = 0;
  let arr = [];
  let newList = new ListNode(null, null),
    curr = newList,
    prev = null;

  while (nodeA || nodeB || carryOver) {
    let a = nodeA.val || 0;
    let b = nodeB.val || 0;

    let sum = a + b + carryOver;

    if (sum >= 10) {
      carryOver = 1;
      sum -= 10;
    } else carryOver = 0;

    arr.push(sum);
    curr.val = sum;
    // if (!nodeA && !nodeB && !carryOver) break

    curr.next = new ListNode();
    prev = curr;
    curr = curr.next;
    nodeA = nodeA.next || 0;
    nodeB = nodeB.next || 0;
  }
  prev.next = null;
  return newList;
};
