// You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e. The node with the number i has the label labels[i]).

// The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.

// Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.

// A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.

// Example 1:

// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"
// Output: [2,1,1,1,1,1,1]
// Explanation: Node 0 has label 'a' and its sub-tree has node 2 with label 'a' as well, thus the answer is 2. Notice that any node is part of its sub-tree.
// Node 1 has a label 'b'. The sub-tree of node 1 contains nodes 1,4 and 5, as nodes 4 and 5 have different labels than node 1, the answer is just 1 (the node itself).

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  let graph = {};
  for (let [first, second] of edges) {
    if (!graph[first]) graph[first] = [second];
    else graph[first].push(second);

    if (!graph[second]) graph[second] = [first];
    else graph[second].push(first);
  }

  const visited = new Array(n).fill(false);
  const output = new Array(n);

  function dfs(node) {
    const storage = {};
    if (!visited[node]) visited[node] = true;

    for (let friends of graph[node]) {
      if (visited[friends]) continue;
      let newObj = dfs(friends);

      for (let [key, value] of Object.entries(newObj)) {
        if (!storage[key]) storage[key] = value;
        else storage[key] += value;
      }
    }

    if (!storage[labels[node]]) storage[labels[node]] = 1;
    else storage[labels[node]] += 1;
    output[node] = storage[labels[node]];

    return storage;
  }

  dfs(0);
  return output;
};
