/*
Write a function, reverseString, that takes in a string as an argument. 
The function should return the string with its characters in reverse order.
 You must do this recursively.
*/
const reverseString = (s) => {
	if (s.length === 0) return "";
	return reverseString(s.slice(1)) + s[0];
};
