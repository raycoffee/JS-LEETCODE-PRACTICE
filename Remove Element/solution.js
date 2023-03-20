/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let lastInd = 0,
    found = false,
    curr,
    k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      curr = nums[i];
      nums[i] = null;
      nums[lastInd] = curr;
      lastInd++;
      k++;
    }

    if (nums[i] === val && !found) {
      lastInd = i;
      nums[i] = null;
      found = true;
    }

    if (nums[i] === val && found) {
      nums[i] = null;
    }
  }

  return k;
};
