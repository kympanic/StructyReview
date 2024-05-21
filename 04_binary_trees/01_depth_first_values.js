/*
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
*/

//Recursive

// const depthFirstValues = (root) => {
// 	if (root === null) return [];

// 	const leftValues = depthFirstValues(root.left);
// 	const rightValues = depthFirstValues(root.right);

// 	return [root.val, ...leftValues, ...rightValues];
// };

const depthFirstValues = (root) => {
	if (root === null) return [];
	let results = [];
	let stack = [root];
	while (stack.length) {
		let node = stack.pop();
		results.push(node.val);

		if (node.right !== null) stack.push(node.right);
		if (node.left !== null) stack.push(node.left);
	}
	return results;
};
