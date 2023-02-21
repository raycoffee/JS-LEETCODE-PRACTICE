// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example 1:

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

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
let deepestLeavesSum = function (root) {
  let depth = 0,
    maxDepth = -Infinity,
    count = 0;

  function dfs(node) {
    if (node.left) {
      depth++;
      dfs(node.left);
    }
    if (node.right) {
      depth++;
      dfs(node.right);
    }

    if (depth == maxDepth) {
      count += node.val;
    }

    if (depth > maxDepth) {
      maxDepth = depth;
      count = node.val;
    }

    depth -= 1;
    return;
  }

  dfs(root);
  return count;
};
