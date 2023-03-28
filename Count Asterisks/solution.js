/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
  let count = 0;
  let firstEn = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      if (!firstEn) firstEn = true;
      else firstEn = false;
    }

    if (s[i] === "*") {
      if (firstEn) continue;
      else count++;
    }
  }

  return count;
};
