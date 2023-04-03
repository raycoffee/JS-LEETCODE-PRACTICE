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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let arr = [],
    tree = new TreeNode(0);
  let currNode = tree;

  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }

    arr.push(node.val);

    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);

  arr.sort((a, b) => {
    b - a;
  });

  for (let i = 0; i < arr.length; i++) {
    currNode.val = arr[i];
    if (i === arr.length - 1) break;
    currNode.left = null;
    currNode.right = new TreeNode(0);
    currNode = currNode.right;
  }

  return tree;
};
