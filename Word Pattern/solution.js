/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let sentence = s.split(" ");
  let objA = {},
    objB = {};

  if (sentence.length !== pattern.length) return false;

  for (let i = 0; i < sentence.length; i++) {
    if (objA[sentence[i]]) {
      if (objA[sentence[i]] !== pattern[i]) return false;
    } else {
      objA[sentence[i]] = pattern[i];
      let testKey = pattern[i];
      if (objB[testKey] && objB[testKey] !== sentence[i]) return false;
      objB[pattern[i]] = sentence[i];
    }
  }

  return true;
};
