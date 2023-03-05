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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  let arr = [];

  if (!root) return;

  const dfs = (node) => {
    arr.push(node.val);

    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }

    return;
  };

  if (arr.length === 1) return;

  dfs(root);
  let currNode = root;

  for (let i = 0; i < arr.length; i++) {
    currNode.val = arr[i];
    currNode.left = null;

    if (currNode.right == null) {
      if (i !== arr.length - 1) currNode.right = new TreeNode(0, null, null);
      else currNode.right = null;
    }

    currNode = currNode.right;
  }
};
