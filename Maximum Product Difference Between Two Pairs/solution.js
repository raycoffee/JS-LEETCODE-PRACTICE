/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  let len = nums.length;

  return nums[0] * nums[1] - nums[len - 1] * nums[len - 2];
};
