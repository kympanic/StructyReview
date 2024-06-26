/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

const largestComponent = (graph) => {
	const visited = new Set();
	let largest = 0;

	for (let node in graph) {
		const size = exploreSize(graph, node, visited);
		if (size > largest) largest = size;
	}

	return largest;
};

const exploreSize = (graph, node, visited) => {
	if (visited.has(node)) return 0;

	visited.add(node);

	let size = 1;
	for (let neighbor of graph[node]) {
		size += exploreSize(graph, neighbor, visited);
	}

	return size;
};
