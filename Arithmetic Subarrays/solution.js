/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let arr = [],
    output = [],
    rangeA,
    rangeB,
    diff = 0,
    result = true;

  for (let i = 0; i < l.length; i++) {
    rangeA = l[i];
    rangeB = r[i];
    arr = nums.slice(rangeA, rangeB + 1).sort((a, b) => {
      return a - b;
    });
    diff = Math.abs(arr[0] - arr[1]);

    for (let j = 0; j < arr.length; j++) {
      if (j == arr.length - 1) {
        break;
      }
      if (Math.abs(arr[j] - arr[j + 1]) !== diff) {
        console.log(Math.abs(arr[i] - arr[i + 1]));

        result = false;
      }
    }

    output.push(result);
    result = true;
  }

  return output;
};
