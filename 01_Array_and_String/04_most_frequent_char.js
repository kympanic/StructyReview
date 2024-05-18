/* 
Write a function, mostFrequentChar, that takes in a string as an argument. The function should 
return the most frequent character of the string. If there are ties, return the character that
 appears earlier in the string. You can assume that the input string is non-empty.
*/

const mostFrequentChar = (s) => {
	let counter = {};
	for (let char of s) {
		if (!(char in counter)) {
			counter[char] = 0;
		}
		counter[char] += 1;
	}
	let best = null;
	for (let char of s) {
		if (best === null || counter[char] > counter[best]) {
			best = char;
		}
	}
	return best;
};
