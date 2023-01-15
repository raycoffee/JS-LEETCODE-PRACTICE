/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let info;
  curr = head;
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - n) curr = curr.next;
    else {
      info = curr;
    }
  }

  if (arr.length == 1) {
    head = null;
    return head;
  }

  curr = head;
  let prev = null;
  while (curr) {
    if (curr !== info) {
      prev = curr;
      curr = curr.next;
    } else if (info === curr) {
      let pointer = curr.next;
      if (!prev) {
        head = pointer;
        break;
      }
      prev.next = pointer;

      break;
    }
  }

  return head;
};
