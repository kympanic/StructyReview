/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph 
and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there 
exists a path between nodeA and nodeB.

*/

// Depth First

const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	return hasPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
	const graph = {};

	for (let edge of edges) {
		const [a, b] = edge;
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}

	return graph;
};

const hasPath = (graph, src, dst, visited) => {
	if (src === dst) return true;
	if (visited.has(src)) return false;
	visited.add(src);

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst, visited) === true) {
			return true;
		}
	}

	return false;
};
