// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

// Example:

// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let aLength = Math.sqrt((ax2 - ax1) ** 2);
  let aBreadth = Math.sqrt((ay2 - ay1) ** 2);
  let bLength = Math.sqrt((bx2 - bx1) ** 2);
  let bBreadth = Math.sqrt((by2 - by1) ** 2);
  let aArea = aLength * aBreadth;
  let bArea = bLength * bBreadth;

  let commonArrAX = [];
  let commonArrX = [];

  for (let i = Math.min(ax1, ax2); i <= Math.max(ax1, ax2); i++) {
    commonArrAX.push(i);
  }

  for (let i = Math.min(bx1, bx2); i <= Math.max(bx1, bx2); i++) {
    if (commonArrAX.includes(i)) {
      commonArrX.push(i);
    }
  }

  let commonArrAY = [];
  let commonArrY = [];

  for (let i = Math.min(ay1, ay2); i <= Math.max(ay1, ay2); i++) {
    commonArrAY.push(i);
  }

  for (let i = Math.min(by1, by2); i <= Math.max(by1, by2); i++) {
    if (commonArrAY.includes(i)) {
      commonArrY.push(i);
    }
  }

  commonLengthX = Math.abs(commonArrX[commonArrX.length - 1] - commonArrX[0]);

  commonLengthY = Math.abs(commonArrY[commonArrY.length - 1] - commonArrY[0]);

  return aArea + bArea - (commonLengthX || 0) * (commonLengthY || 0);
};
