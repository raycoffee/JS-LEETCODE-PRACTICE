// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

// Example:

// Input: tasks = [2,2,3,3,2,4,4,4,4,4]
// Output: 4
// Explanation: To complete all the tasks, a possible plan is:
// - In the first round, you complete 3 tasks of difficulty level 2.
// - In the second round, you complete 2 tasks of difficulty level 3.
// - In the third round, you complete 3 tasks of difficulty level 4.
// - In the fourth round, you complete 2 tasks of difficulty level 4.
// It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let output = 0;
  const map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (map.has(tasks[i])) {
      map.set(tasks[i], map.get(tasks[i]) + 1);
    } else {
      map.set(tasks[i], 1);
    }
  }

  for (let keys of map) {
    if (keys[1] < 2) return -1;
    // if (keys[1] % 3 !==0) {
    //     while (map.get(keys[0]) % 3 !== 0) {
    //     map.set(keys[0], map.get(keys[0])-2)
    //     output++
    //     if (map.get(keys[0]) === 0) continue
    //     }
    // }
    // if (map.get(keys[0]) % 3 === 0) {
    //     output += map.get(keys[0])/3
    // }
    output += Math.ceil(keys[1] / 3);
  }

  return output;
};
