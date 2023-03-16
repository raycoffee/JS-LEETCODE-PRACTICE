// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0].split("");

  for (let i = 1; i < strs.length; i++) {
    if (prefix.length > strs[i].length) {
      while (prefix.length > strs[i].length) {
        prefix.pop();
      }
    }

    if (prefix.join("") == strs[i]) {
      continue;
    } else {
      while (prefix.length !== 0) {
        if (prefix.join("") !== strs[i].slice(0, prefix.length)) {
          prefix.pop();
        } else break;
      }
    }
  }

  return prefix.join("");
};
