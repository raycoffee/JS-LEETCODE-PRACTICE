// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

// Example:

// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const graph = [];
  for (let i = 0; i < edges.length; i++) {
    if (!graph[edges[i][0]]) {
      graph[edges[i][0]] = [edges[i][1]];
    } else graph[edges[i][0]].push(edges[i][1]);

    if (!graph[edges[i][1]]) {
      graph[edges[i][1]] = [edges[i][0]];
    } else graph[edges[i][1]].push(edges[i][0]);
  }

  function dfs(index, parent) {
    let currCost = 0;

    for (let i = 0; i < graph[index].length; i++) {
      if (graph[index][i] == parent) continue;
      currCost += dfs(graph[index][i], index);
    }

    let selfCost = 0;

    if (hasApple[index]) {
      selfCost = 2;
    }
    if (index == 0) {
      selfCost = 0;
    } else if (currCost > 0) selfCost = 2;

    return selfCost + currCost;
  }

  return dfs(0, -1);
};
