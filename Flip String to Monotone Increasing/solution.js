// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

// Example 1:

// Input: s = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let oneCount = 0,
    zeroCount = 0;
  let oneVisited = false;

  for (let num of s) {
    if (num == 0) {
      if (!oneVisited) continue;
      else zeroCount++;
    } else {
      oneCount++;
      oneVisited = true;
    }
    if (zeroCount > oneCount) zeroCount = oneCount;
  }

  return zeroCount;
};
