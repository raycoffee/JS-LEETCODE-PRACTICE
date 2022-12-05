// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Example:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let nSum = (n * (1 + n)) / 2;
  let leftSum, rightSum;

  for (let i = 1; i <= n; i++) {
    leftSum = (i * (1 + i)) / 2;
    rightSum = (n * (1 + n)) / 2 - leftSum + i;

    if (leftSum == rightSum) {
      return i;
    } else nSum -= i;
  }

  return -1;
};
