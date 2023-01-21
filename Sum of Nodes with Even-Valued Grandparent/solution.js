// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.

// Example 1:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  let queue = [root],
    sum = 0,
    gMap = new Map();

  while (queue.length > 0) {
    let currNode = queue.shift();

    if (currNode.left) {
      queue.push(currNode.left);
      gMap.set(currNode.left, currNode);

      if (gMap.has(currNode) && gMap.get(currNode).val % 2 == 0) {
        sum += currNode.left.val;
      }
    }
    if (currNode.right) {
      queue.push(currNode.right);
      gMap.set(currNode.right, currNode);

      if (gMap.has(currNode) && gMap.get(currNode).val % 2 == 0) {
        sum += currNode.right.val;
      }
    }
  }

  return sum;
};
