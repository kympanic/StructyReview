/*
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order
*/

const breadthFirstValues = (root) => {
	if (root === null) return [];
	let queue = [root];
	let results = [];
	while (queue.length) {
		let node = queue.shift();
		results.push(node.val);

		if (node.left !== null) queue.push(node.left);
		if (node.right !== null) queue.push(node.right);
	}

	return results;
};
