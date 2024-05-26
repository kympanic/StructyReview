/*
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

//Breadth First (iterative)
const treeLevels = (root) => {
	if (root === null) return [];

	const levels = [];
	const queue = [{ node: root, levelNum: 0 }];
	while (queue.length > 0) {
		const { node, levelNum } = queue.shift();

		if (levels.length === levelNum) {
			levels[levelNum] = [node.val];
		} else {
			levels[levelNum].push(node.val);
		}

		if (node.left !== null)
			queue.push({ node: node.left, levelNum: levelNum + 1 });
		if (node.right !== null)
			queue.push({ node: node.right, levelNum: levelNum + 1 });
	}

	return levels;
};

//Depth First (recursive)
// const treeLevels = (root) => {
//     const levels = [];
//     _treeLevels(root, levels, 0);
//     return levels;
//   };

//   const _treeLevels = (root, levels, levelNum) => {
//     if (root === null) return;

//     if (levels.length === levelNum) {
//       levels[levelNum] = [root.val];
//     } else {
//       levels[levelNum].push(root.val);
//     }

//     _treeLevels(root.left, levels, levelNum + 1);
//     _treeLevels(root.right, levels, levelNum + 1);
//   };
