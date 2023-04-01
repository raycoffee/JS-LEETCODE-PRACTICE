/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let first = 0,
    last = nums.length - 1,
    mid = Math.floor((first + last) / 2);

  if (nums[first] === target) return first;
  if (nums[last] === target) return last;

  while (mid > first) {
    if (nums[mid] < target) first = mid;
    else if (nums[mid] > target) last = mid;
    else if (nums[mid] === target) return mid;

    mid = Math.floor((first + last) / 2);
  }

  return -1;
};
