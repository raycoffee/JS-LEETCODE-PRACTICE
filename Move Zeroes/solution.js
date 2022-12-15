// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  (zeroCount = 0), (i = 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) zeroCount++;
  }

  while (zeroCount !== 0) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeroCount--;
    } else {
      i++;
    }
  }
};
