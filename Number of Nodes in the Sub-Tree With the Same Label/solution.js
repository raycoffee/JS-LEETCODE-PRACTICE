/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
 var countSubTrees = function(n, edges, labels) {
    // Create an adjacency list to represent the tree
    let adjList = new Array(n).fill(null).map(() => []);
    for (let [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    // Create an array to store the result
    let res = new Array(n).fill(0);

    // Run a depth-first search to traverse the tree and count the subtrees
    function dfs(node, parent) {
        let count = new Array(26).fill(0); // count of each letter in the subtree
        count[labels.charCodeAt(node) - 'a'.charCodeAt(0)]++; // count the current node
        for (let next of adjList[node]) {
            if (next !== parent) {
                let nextCount = dfs(next, node);
                for (let i = 0; i < 26; i++) {
                    count[i] += nextCount[i];
                }
            }
        }
        res[node] = count[labels.charCodeAt(node) - 'a'.charCodeAt(0)]; // store the result for current node
        return count;
    }

    dfs(0, -1);
    return res;
}