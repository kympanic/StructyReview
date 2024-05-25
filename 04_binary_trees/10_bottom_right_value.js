/*
Write a function, bottomRightValue, that takes in the root of a binary tree. 
The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
*/

const bottomRightValue = (root) => {
	let queue = [root];
	let node = null;
	while (queue.length) {
		node = queue.shift();
		if (node.left !== null) queue.push(node.left);
		if (node.right !== null) queue.push(node.right);
	}
	return node.val;
};
