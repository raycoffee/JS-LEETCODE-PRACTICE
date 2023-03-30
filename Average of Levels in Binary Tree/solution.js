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
var averageOfLevels = function (root) {
  let output = [];
  let stack = [root];

  while (stack.length !== 0) {
    let len = stack.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      let currNode = stack.shift();
      level.push(currNode.val);

      if (currNode.left) {
        stack.push(currNode.left);
      }
      if (currNode.right) {
        stack.push(currNode.right);
      }
    }
    let total = level.length;
    let sum = level.reduce((a, b) => {
      return a + b;
    }, 0);
    let avg = sum / total;
    output.push(avg);
    level = [];
  }

  return output;
};
