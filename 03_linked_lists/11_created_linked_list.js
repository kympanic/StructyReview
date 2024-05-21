/*
Write a function, createLinkedList, that takes in an array of values as an argument. T
he function should create a linked list containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const createLinkedList = (values) => {
	if (!values.length) return null;
	let dummyHead = new Node(null);
	let tail = dummyHead;
	for (char of values) {
		tail.next = new Node(char);
		tail = tail.next;
	}

	return dummyHead.next;
};
