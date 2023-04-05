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
var invertTree = function (root) {
  let stack = [root];

  if (!root) return root;

  while (stack.length > 0) {
    let currNode = stack.shift();

    let temp = currNode.left;

    currNode.left = currNode.right;
    currNode.right = temp;

    if (currNode.left) {
      stack.push(currNode.left);
    }
    if (currNode.right) {
      stack.push(currNode.right);
    }
  }

  return root;
};
