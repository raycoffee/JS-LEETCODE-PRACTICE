// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let sqArr = nums.map((x) => {
    return x ** 2;
  });

  return sqArr.sort((a, b) => {
    return a - b;
  });
};
