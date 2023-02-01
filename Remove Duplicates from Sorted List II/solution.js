// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

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
const deleteDuplicates = function (head) {
  let map = new Map(),
    duplicates = new Map();
  let arr = [];

  if (!head) return null;

  let curr = head;
  while (curr) {
    if (!map.has(curr.val)) {
      map.set(curr.val, 0);
      arr.push(curr.val);
    } else {
      duplicates.set(curr.val);
    }
    curr = curr.next;
  }
  if (duplicates.size == 0) return head;
  if (arr.length == 1) return null;

  curr = head;
  let prev = null;
  for (let num of arr) {
    if (duplicates.has(num)) continue;
    else {
      curr.val = num;
      prev = curr;
      curr = curr.next;
    }
  }

  if (!prev) return null;
  prev.next = null;
  return head;
};
