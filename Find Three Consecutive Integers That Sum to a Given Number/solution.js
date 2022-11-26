// Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

// Example:

// Input: num = 33
// Output: [10,11,12]
// Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
// 10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  x = (num - 3) / 3;
  if (`${x}`.includes(".")) {
    return [];
  } else {
    return [x, x + 1, x + 2];
  }
};
