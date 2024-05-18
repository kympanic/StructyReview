/*
Write a function, pairSum, that takes in an array and a target sum as arguments. The function 
should return an array containing a pair of indices whose elements sum to the given target. The 
indices returned must be unique. Be sure to return the indices, not the elements themselves.
There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
	let previousNums = {};

	for (let i = 0; i < numbers.length; i++) {
		let number = numbers[i];
		let complement = targetSum - number;
		if (complement in previousNums) return [i, previousNums[complement]];

		previousNums[number] = i;
	}
};
