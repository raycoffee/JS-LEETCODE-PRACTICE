// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: root = [1,null,2,3]
// Output: [1,2,3]

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const list = [];

  function dfsPre(node) {
    list.push(node.val);

    if (node.left) dfsPre(node.left);
    if (node.right) dfsPre(node.right);

    return list;
  }

  return dfsPre(root);
};
