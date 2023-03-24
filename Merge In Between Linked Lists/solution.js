/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let secondHalf = list1,
    i = 0;

  while (secondHalf) {
    if (i === b) {
      secondHalf = secondHalf.next ? secondHalf.next : null;
      break;
    }

    i++;
    secondHalf = secondHalf.next;
  }

  let currNode = list1,
    j = 0;

  while (currNode) {
    if (!currNode.next) {
      currNode.next = secondHalf;
      break;
    }
    if (j + 1 === a) {
      currNode.next = list2;
    }

    j++;
    currNode = currNode.next;
  }

  return list1;
};
