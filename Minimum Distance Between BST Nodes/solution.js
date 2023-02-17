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
var minDiffInBST = function (root) {
  let minimum = Infinity;
  let stack = [root],
    arr = [];

  while (stack.length > 0) {
    let currNode = stack.pop();

    for (let i = 0; i < arr.length; i++) {
      if (currNode !== arr[i]) {
        let num = Math.abs(currNode.val - arr[i].val);
        if (num < minimum) minimum = num;
      }
    }

    arr.push(currNode);
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }

  return minimum;
};
