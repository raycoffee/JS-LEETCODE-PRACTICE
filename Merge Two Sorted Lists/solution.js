/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = function(list1, list2) {

    if (!list1 && !list2) return list1

    if (list1 && !list2) return list1

    if (!list1 && list2) return list2

    let currNodeA = list1
    let currNodeB = list2

    let arr = []

    while(currNodeA) {
       arr.push(currNodeA.val)
       currNodeA = currNodeA.next
    }
    while(currNodeB) {
       arr.push(currNodeB.val)
       currNodeB = currNodeB.next
    }

    arr.sort((a,b) => {return a-b})

    let list = new ListNode(0, null)
    let track = list

    for (let i=0; i<arr.length; i++) {

        track.val = arr[i]


        if (track.next) track = track.next
        else {
            if (i == arr.length-1) break
            track.next = new ListNode(0, null)
            track = track.next
        }
    }

    return list
};