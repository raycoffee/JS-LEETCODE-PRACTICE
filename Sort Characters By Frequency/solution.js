// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let obj = {},
    answer = [],
    arr = [];
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }

  let sortedArr = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < sortedArr.length; i++) {
    arr = new Array(sortedArr[i][1]);
    arr = arr.fill(sortedArr[i][0], 0, sortedArr[i][1]);
    answer.push(...arr);
  }

  return answer.join("");
};
