// Given a string s, find the length of the longest
// substring without repeating characters.

// Example:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = [],
    max = 0,
    curr = 0,
    index;

  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str.push(s[i]);
      curr = str.length;
    } else {
      index = str.indexOf(s[i]);
      str.splice(0, index + 1);
      str.push(s[i]);
    }
    if (curr > max) {
      max = curr;
      curr = 0;
    }
  }

  return max;
};
