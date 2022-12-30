// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let output = [intervals[0]]; //[1,4]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= output[output.length - 1][1]) {
      output[output.length - 1][1] = Math.max(
        intervals[i][1],
        output[output.length - 1][1]
      );
    } else {
      output.push(intervals[i]);
    }
  }
  return output;
};
