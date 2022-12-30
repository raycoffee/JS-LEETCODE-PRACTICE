// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  let arr = [];
  let sorted = nums.sort((a, b) => a - b);
  let cache = new Map();

  for (let i = 0; i < sorted.length - 3; i++) {
    for (let j = i + 1; j < sorted.length - 2; j++) {
      let left = j + 1;
      let right = sorted.length - 1;
      while (left < right) {
        let total = sorted[i] + sorted[j] + sorted[left] + sorted[right];

        if (total === target) {
          if (
            cache.has(
              `${sorted[i]}, ${sorted[j]}, ${sorted[left]}, ${sorted[right]}`
            )
          ) {
            left++;
            right--;
            continue;
          } else {
            arr.push([sorted[i], sorted[j], sorted[left], sorted[right]]);
            cache.set(
              `${sorted[i]}, ${sorted[j]}, ${sorted[left]}, ${sorted[right]}`,
              0
            );
            left++;
            right--;
            continue;
          }
        } else if (total < target) {
          left++;
          continue;
        } else if (total > target) {
          right--;
          continue;
        }
      }
    }
  }
  return arr;
};
