// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let sortedWord,
    map = new Map(),
    currArr = [];

  for (let i = 0; i < strs.length; i++) {
    sortedWord = strs[i].split("").sort().join("");

    if (map.get(sortedWord)) {
      currArr = map.get(sortedWord);
      currArr.push(strs[i]);

      map.set(sortedWord, currArr);
    } else {
      map.set(sortedWord, [strs[i]]);
    }
  }

  return [...map.values()];
};
