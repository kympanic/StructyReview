/*
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
The function should merge the two lists together into single sorted linked list. 
The function should return the head of the merged linked list.
Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const mergeLists = (head1, head2) => {
	let dummyHead = new Node(null);
	let tail = dummyHead;
	let current1 = head1;
	let current2 = head2;
	while (current1 !== null && current2 !== null) {
		if (current1.val < current2.val) {
			tail.next = current1;
			current1 = current1.next;
		} else {
			tail.next = current2;
			current2 = current2.next;
		}
		tail = tail.next;
	}
	if (current1 !== null) tail.next = current1;
	if (current2 !== null) tail.next = current2;

	return dummyHead.next;
};
