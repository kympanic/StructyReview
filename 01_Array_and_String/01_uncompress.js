/*
Write a function, uncompress, that takes in a string as an argument. The input string will be 
formatted into multiple groups according to the following pattern:
*/
const uncompress = (s) => {
	let i = 0;
	let j = 0;
	let numbers = "0123456789";
	let results = [];
	while (j < s.length) {
		if (numbers.includes(s[j])) {
			j += 1;
		} else {
			let number = Number(s.slice(i, j));
			for (let count = 0; count < number; count++) {
				results.push(s[j]);
			}
			j += 1;
			i = j;
		}
	}

	return results.join("");
};
