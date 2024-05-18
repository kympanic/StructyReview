/* 
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return 
a new array containing elements that are in both of the two arrays.
You may assume that each input array does not contain duplicate elements.
*/

const intersection = (a, b) => {
	let setA = new Set(a);
	let results = [];
	for (let char of b) {
		if (setA.has(char)) {
			results.push(char);
		}
	}

	return results;
};
