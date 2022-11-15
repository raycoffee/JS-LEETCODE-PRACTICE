// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

// Example:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

let countKDifference = function (nums, k) {
  let count = 0,
    i = 0,
    j = 0,
    abs = false;
  while (abs == false) {
    if (i == j) {
      j++;
      continue;
    }
    if (Math.abs(nums[i] - nums[j]) == k) {
      count++;
      j++;
      continue;
    }
    if (j == nums.length) {
      i++;
      j = i;
    }
    if (i == nums.length) {
      return count;
    }
    j++;
  }
};
