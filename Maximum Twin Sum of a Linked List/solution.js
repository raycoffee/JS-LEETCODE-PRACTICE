/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let obj = {};

  let currNode = head,
    i = 0,
    len = -1;

  while (currNode) {
    currNode = currNode.next;
    len++;
  }

  currNode = head;

  while (currNode) {
    if (!obj[len - i] && !obj[i]) obj[len - i] = currNode.val;
    else obj[i] += currNode.val;
    currNode = currNode.next;
    i++;
  }

  let max = -Infinity;

  for (let [key, val] of Object.entries(obj)) {
    if (val >= max) max = val;
  }

  return max;
};
