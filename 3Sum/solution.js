// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let numSorted = nums.sort((a, b) => {
      return a - b;
    }),
    arr = [];
  let rIndex, lIndex;

  for (let i = 0; i <= numSorted.length - 3; i++) {
    rIndex = numSorted.length - 1;
    lIndex = i + 1;
    if (numSorted[i] == numSorted[i - 1]) continue;

    while (lIndex < rIndex) {
      if (numSorted[i] + numSorted[lIndex] + numSorted[rIndex] < 0) {
        lIndex++;
        continue;
      } else if (numSorted[i] + numSorted[lIndex] + numSorted[rIndex] > 0) {
        rIndex--;
        continue;
      }
      if (numSorted[i] + numSorted[lIndex] + numSorted[rIndex] === 0) {
        arr.push([numSorted[i], numSorted[lIndex], numSorted[rIndex]]);

        while (numSorted[lIndex] == numSorted[lIndex + 1]) {
          lIndex++;
        }
        while (numSorted[rIndex] == numSorted[rIndex + 1]) {
          rIndex--;
        }

        lIndex++;
        rIndex--;
      }
    }
  }

  return arr;
};
