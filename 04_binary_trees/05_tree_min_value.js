/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/

//recursive
// const treeMinValue = (root) => {
// 	if (root === null) return Infinity;
// 	let leftValues = treeMinValue(root.left);
// 	let rightValues = treeMinValue(root.right);
// 	return Math.min(root.val, leftValues, rightValues);
// };

const treeMinValue = (root) => {
	let min = Infinity;
	let stack = [root];
	while (stack.length) {
		let node = stack.pop();
		if (node.val < min) min = node.val;

		if (node.right !== null) stack.push(node.right);
		if (node.left !== null) stack.push(node.left);
	}

	return min;
};
