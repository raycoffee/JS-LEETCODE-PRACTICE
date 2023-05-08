/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let left = 0,
    right = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    if (left === right) {
      sum += mat[i][left];
      left++;
      right--;
      continue;
    }
    sum += mat[i][left];
    left++;
    sum += mat[i][right];
    right--;
  }

  return sum;
};
