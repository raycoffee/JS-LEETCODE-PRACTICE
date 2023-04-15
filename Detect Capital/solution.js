// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  let small = new Map();
  let upper = new Map();
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabets.length; i++) {
    small.set(alphabets[i], i);
    upper.set(alphabets[i].toUpperCase(), i);
  }

  let allUp = false,
    allLow = false,
    firstUp = false,
    j = 0;

  for (let i = 0; i < word.length; i++) {
    if (small.has(word[i]) && j == 0) {
      allLow = true;
    }

    if (upper.has(word[i]) && j == 0) {
      firstUp = true;
    }

    if (upper.has(word[i]) && j == 1) {
      allUp = true;
      firstUp = false;
    }

    if (j >= 2) {
      if (allUp && small.has(word[i])) return false;
      else if (firstUp && upper.has(word[i])) return false;
    }

    if (allLow) {
      if (upper.has(word[i])) return false;
    }
    j++;
  }

  return true;
};
