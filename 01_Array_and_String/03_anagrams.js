/* Write a function, anagrams, that takes in two strings as arguments. The function should 
return a boolean indicating whether or not the strings 
are anagrams. Anagrams are strings that contain the same characters, but in any order. */

const anagrams = (s1, s2) => {
	let counter = {};
	for (let char of s1) {
		if (!(char in counter)) {
			counter[char] = 0;
		}
		counter[char] += 1;
	}

	for (let char of s2) {
		if (!(char in counter)) {
			return false;
		} else {
			counter[char] -= 1;
		}
	}

	for (let char in counter) {
		if (counter[char] !== 0) return false;
	}

	return true;
};
