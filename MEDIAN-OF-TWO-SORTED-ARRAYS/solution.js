// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });
  if (nums3.length % 2 == 1) {
    return nums3[Math.round(nums3.length / 2) - 1];
  } else if (nums3.length % 2 == 0) {
    return (nums3[nums3.length / 2 - 1] + nums3[nums3.length / 2]) / 2;
  }
};
