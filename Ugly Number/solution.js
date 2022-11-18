// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function (n) {
  let ugly = false;
  while (ugly == false) {
    if (n == 0) {
      return false;
    }
    if (n % 2 == 0) {
      n /= 2;
    } else if (n % 3 == 0) {
      n /= 3;
    } else if (n % 5 == 0) {
      n /= 5;
    } else {
      if (n == 1) {
        return true;
      } else return false;
    }
  }
};
