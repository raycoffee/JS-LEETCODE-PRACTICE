/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let arr = [],
    positive = [],
    negative = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }

  for (let i = 0; i < positive.length; i++) {
    arr.push(positive[i]);
    arr.push(negative[i]);
  }

  return arr;
};
