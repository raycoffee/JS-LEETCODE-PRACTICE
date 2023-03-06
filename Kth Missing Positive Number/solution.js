/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let missingNums = [];
  let j = 1,
    i = 0;

  while (true) {
    if (i >= arr.length) missingNums.push(j);
    else if (arr[i] !== j) {
      while (true) {
        if (arr[i] === j) break;
        missingNums.push(j);
        j++;
      }
    }

    if (missingNums.length >= k) break;
    j++;
    i++;
  }

  return missingNums[k - 1];
};
