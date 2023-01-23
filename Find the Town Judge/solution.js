// 997. Find the Town Judge
// Easy
// 5.2K
// 418
// Companies
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example:

// Input: n = 2, trust = [[1,2]]
// Output: 2

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n == 1) return n;

  const graph = {},
    judge = new Set();

  for (let i = 0; i < trust.length; i++) {
    if (graph[trust[i][0]]) {
      graph[trust[i][0]].push(trust[i][1]);
    } else {
      graph[trust[i][0]] = [trust[i][1]];
    }

    judge.add(trust[i][1]);
  }

  //Check if potential judges don't trust anybody else
  let potential = false;
  for (let key of judge) {
    if (graph[key]) judge.delete(key);
  }

  if (judge.size == 1) potential = [...judge][0];
  else return -1;

  for (let keys of Object.keys(graph)) {
    if (!graph[keys].includes(potential)) return -1;
  }

  return potential;
};
