// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let sorted = nums.sort((a, b) => {
    return a - b;
  });
  let closest = Infinity,
    sum;
  //4, 2, 1
  for (let i = 0; i <= sorted.length - 3; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      let total = sorted[i] + sorted[left] + sorted[right];

      if (Math.abs(total - target) < closest) {
        closest = Math.abs(total - target);
        sum = sorted[i] + sorted[left] + sorted[right];
      }

      if (total === target) {
        return total;
      } else if (total < target) {
        left++;
      } else if (total > target) {
        right--;
      }
    }
  }

  return sum;
};
