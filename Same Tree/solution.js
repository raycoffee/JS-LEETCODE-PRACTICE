// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function bfs() {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    let pStack = [p];
    let qStack = [q];

    while (pStack.length > 0) {
      let currentP = pStack.shift();
      let currentQ = qStack.shift();

      if (currentP.val !== currentQ.val) return false;

      console.log(currentP.val, currentQ.val);

      if (currentP.left && currentQ.left) {
        pStack.push(currentP.left);
        qStack.push(currentQ.left);
      } else if (currentP.left !== currentQ.left) return false;

      if (currentP.right && currentQ.right) {
        pStack.push(currentP.right);
        qStack.push(currentQ.right);
      } else if (currentP.right !== currentQ.right) return false;
    }

    return true;
  }

  return bfs();
};
