// Example 1:


// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let currNode = head;
  let len = 0;

  while (currNode) {
    currNode = currNode.next;
    len++;
  }

  if (len % 2 == 0) len = len / 2;
  else len = Math.floor(len / 2);

  if (len == 0) {
    head = head.next;
  }

  let i = 0;

  currNode = head;
  let prev;

  while (currNode) {
    if (i !== len) {
      prev = currNode;
      currNode = currNode.next;
      i++;
    } else {
      prev.next = currNode.next;
      break;
    }
  }

  return head;
};
