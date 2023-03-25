/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let stack = s.split("");

  for (let i = t.length - 1; i >= 0; i--) {
    let lastInd = stack.length - 1;

    if (stack[lastInd] === t[i]) {
      stack.pop();
    }
  }

  if (stack.length > 0) return false;
  else return true;
};
