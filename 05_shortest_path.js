/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path between A and B. Consider the length as the number of edges 
in the path, not the number of nodes. If there is no path between A and B, then return -1. You can assume that A and B 
exist as nodes in the graph.
*/

//Breadth First

const shortestPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	const visited = new Set([nodeA]);
	const queue = [[nodeA, 0]];

	while (queue.length > 0) {
		const [node, distance] = queue.shift();

		if (node === nodeB) return distance;

		for (let neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push([neighbor, distance + 1]);
			}
		}
	}

	return -1;
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
