/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let sorted = salary.sort((a, b) => {
    return a - b;
  });

  sorted.pop();
  sorted.shift();

  let avg =
    sorted.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / sorted.length;

  return avg;
};
