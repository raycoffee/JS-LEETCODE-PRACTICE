/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let output = [];

  for (let [i, num] of arr.entries()) {
    if (fn(num, i)) output.push(num);
  }

  return output;
};
