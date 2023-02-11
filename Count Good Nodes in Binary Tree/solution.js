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
var goodNodes = function (root) {
  let output = 0,
    max = -Infinity;
  let nums = [];

  function dfs(node) {
    nums.push(node.val);
    max = Math.max(...nums);
    if (node.val >= max) output++;
    if (node.left) {
      dfs(node.left);
    }

    if (node.right) {
      dfs(node.right);
    }

    nums.pop();
    return;
  }

  dfs(root);
  return output;
};
