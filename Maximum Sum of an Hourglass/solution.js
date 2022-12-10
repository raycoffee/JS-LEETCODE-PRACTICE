// You are given an m x n integer matrix grid.

// We define an hourglass as a part of the matrix with the following form:

// Return the maximum sum of the elements of an hourglass.

// Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

// Example:

// Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
// Output: 30
// Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let max = -1,
    total = [],
    top = [],
    mid = [],
    bottom = [],
    i = 0,
    j = 0;

  while (true) {
    top = grid[j].slice(i, i + 3);
    mid = grid[j + 1].slice(i + 1, i + 2);
    bottom = grid[j + 2].slice(i, i + 3);

    total = [...top, ...mid, ...bottom].reduce((a, b) => {
      return a + b;
    }, 0);

    if (total > max) {
      max = total;
    }
    i++;

    if (i + 2 >= grid[0].length) {
      i = 0;
      j++;
    }

    if (j + 2 >= grid.length) {
      break;
    }
  }

  return max;
};
