/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let morseCodes = [];

  for (let i = 0; i < words.length; i++) {
    let code = "";
    for (let j = 0; j < words[i].length; j++) {
      let index = alphabets.indexOf(words[i][j]);
      code += morse[index];
    }
    morseCodes.push(code);
    code = "";
  }

  const unique = new Set(morseCodes);

  return unique.size;
};
