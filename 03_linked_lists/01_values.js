/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.
*/

const linkedListValues = (head) => {
	let results = [];
	let current = head;

	while (current !== null) {
		results.push(current.val);
		current = current.next;
	}

	return results;
};
