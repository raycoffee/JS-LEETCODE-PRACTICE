// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vcounta = 0,
    vcountb = 0,
    vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
    j = 0,
    k = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[j])) {
      vcounta++;
    }
    if (vowel.includes(s[k])) {
      vcountb++;
    }
    j++;
    k--;
    if (j > k) {
      break;
    }
  }

  if (vcounta == vcountb) {
    return true;
  } else return false;
};
