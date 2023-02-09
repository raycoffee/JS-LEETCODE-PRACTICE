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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let total = 0;
  let stack = [root];

  while (stack.length > 0) {
    let currNode = stack.pop();
    if (currNode.val >= low && currNode.val <= high) {
      total += currNode.val;
    }

    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }

  return total;
};
