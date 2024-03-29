/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reducer = function (nums, fn, init) {
  res = init;

  for (let num of nums) {
    res = fn(res, num);
  }

  return res;
};
