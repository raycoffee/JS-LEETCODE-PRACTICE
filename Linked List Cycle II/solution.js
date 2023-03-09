/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let map = new Map()
    let currNode = head, i=0


    while(currNode) {
        if (!map.has(currNode)) {
            map.set(currNode, i)
        } else {
            return currNode
        }

        currNode = currNode.next
        i++
    }

    return null
};