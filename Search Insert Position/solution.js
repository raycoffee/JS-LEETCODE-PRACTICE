// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (true) {
    let middle = Math.floor((start + end) / 2);
    if (middle == start) {
      if (nums[start] < target) {
        if (nums[end] < target) return end + 1;
        else return end;
      }
      if (nums[start] > target) return start;
    }

    if (nums[middle] < target) {
      start = middle;
    }

    if (nums[middle] > target) {
      end = middle;
    }

    if (nums[middle] == target) return middle;
  }
};
