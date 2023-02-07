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
var sumNumbers = function (root) {
  let nums = [],
    num = "";

  function dfs(node) {
    num += node.val;
    if (node.left) {
      dfs(node.left);
    }

    if (node.right) {
      dfs(node.right);
    }

    if (!node.left && !node.right) nums.push(+num);
    num = num.slice(0, num.length - 1);
    return;
  }

  dfs(root);
  return nums.reduce((a, b) => {
    return a + b;
  }, 0);
};
