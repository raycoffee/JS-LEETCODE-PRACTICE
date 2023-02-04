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
 var oddEvenList = function(head) {
    let evenList = [], oddList = [], odd = true

    let currNode = head
    while (currNode) {
        if (odd) {
            oddList.push(currNode.val)
            odd = false

        } else {
            evenList.push(currNode.val)
            odd = true
        }

        currNode = currNode.next
    }

    oddList.reverse()
    evenList.reverse()

    currNode = head

    while (currNode) {
        if (oddList.length > 0) {
            currNode.val = oddList.pop()
        } else {
            currNode.val = evenList.pop()
        }

        currNode = currNode.next
    }

    return head
};