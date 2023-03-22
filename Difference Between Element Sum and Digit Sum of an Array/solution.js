/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elSum = 0,
    digSum = [];

  for (let i = 0; i < nums.length; i++) {
    elSum += nums[i];
    let spreadArr = `${nums[i]}`.split("");
    digSum.push(...spreadArr);
  }
  let digit = 0;

  for (let num of digSum) {
    digit += Number(num);
  }

  return Math.abs(elSum - digit);
};
