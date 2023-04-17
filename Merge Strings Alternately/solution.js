/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newWord = "";
  let len = word1.length >= word2.length ? word1.length : word2.length;

  for (let i = 0; i < len; i++) {
    if (word1[i]) newWord += word1[i];
    if (word2[i]) newWord += word2[i];
  }

  return newWord;
};
