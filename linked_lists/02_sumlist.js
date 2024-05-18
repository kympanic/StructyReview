/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list.
*/

//recursive
// let sumList = (head) => {
// 	if (head === null) return 0;
// 	return head.val + sumList(head.next);
// };

let sumList = (head) => {
	let current = head;
	let sum = 0;
	while (current !== null) {
		sum += current.val;
		current = current.next;
	}
	return sum;
};
