// Given an integer array nums, find the
// subarray
//  which has the largest sum and return its sum.

// Example:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSubArr = nums[0],
    counts = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    maxSubArr = Math.max(nums[i], maxSubArr + nums[i]);
    counts.push(maxSubArr);
  }

  return Math.max.apply(null, counts);
};