// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftToRight = 1;
  let output = new Array(nums.length);

  for (let i = 0; i < output.length; i++) {
    output[i] = leftToRight;
    leftToRight = leftToRight * nums[i];
  }

  let rightToLeft = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * rightToLeft;
    rightToLeft = rightToLeft * nums[i];
  }

  return output;
};
