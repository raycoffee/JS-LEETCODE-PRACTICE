/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let graph = {}, store = {num: null, max: -1}

    for (let i=0; i<edges.length; i++) {
        let edge1 = edges[i][0]
        let edge2 = edges[i][1]

        if (!graph[edge1]) graph[edge1] = [edge2]
        else graph[edge1].push(edge2)

        if (graph[edge1].length > store.max) {
            store.num = edge1
            store.max = graph[edge1].length
        }

        if (!graph[edge2]) graph[edge2] = [edge1]
        else graph[edge2].push(edge1)

        if (graph[edge2].length > store.max) {
            store.num = edge2
            store.max = graph[edge2].length
        }
    }

    return store.num
};