/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
The function should return a boolean indicating whether or not the value is contained in the tree.
*/

//recursive
// const treeIncludes = (root, target) => {
// 	if (root === null) return false;
// 	if (root.val === target) return true;
// 	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

const treeIncludes = (root, target) => {
	if (root === null) return false;
	let stack = [root];
	while (stack.length) {
		let node = stack.pop();
		if (node.val === target) return true;

		if (node.right !== null) stack.push(node.right);
		if (node.left !== null) stack.push(node.left);
	}
	return false;
};
