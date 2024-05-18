// const palindrome = (s) => {
// 	if (s.length === 0) return true;
// 	let i = 0;
// 	let j = s.length - 1;
// 	while (i < j) {
// 		if (s[i] !== s[j]) return false;
// 		i += 1;
// 		j -= 1;
// 		if (i === j) return true;
// 	}
// };

//recursive
const palindrome = (s) => {
	if (s.length === 0 || s.length === 1) return true;

	if (s[0] !== s[s.length - 1]) {
		return false;
	}

	return palindrome(s.slice(1, -1));
};
