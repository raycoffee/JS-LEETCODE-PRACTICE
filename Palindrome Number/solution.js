/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverseStr = "";
  for (let i = `${x}`.length - 1; i >= 0; i--) {
    let numStr = `${x}`;

    reverseStr += numStr[i];
  }

  if (reverseStr == x) {
    return true;
  } else {
    return false;
  }
};
