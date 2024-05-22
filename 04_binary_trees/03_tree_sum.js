/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
*/

// recursive
// const treeSum = (root) => {
// 	if (root === null) return 0;
// 	return root.val + treeSum(root.left) + treeSum(root.right);
// };

const treeSum = (root) => {
	if (root === null) return 0;
	let stack = [root];
	let sum = 0;
	while (stack.length) {
		let node = stack.pop();
		sum += node.val;

		if (node.right !== null) stack.push(node.right);
		if (node.left !== null) stack.push(node.left);
	}

	return sum;
};
