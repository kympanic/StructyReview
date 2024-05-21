/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; 
this means that the least significant digit of the number is the head. The function should return the 
head of a new linked listed representing the sum of the input lists. The output list should have its 
digits reversed as well.

You must do this by traversing through the linked lists once.
*/

const addLists = (head1, head2, carry = 0) => {
	if (head1 === null && head2 === null && carry === 0) return null;

	const val1 = head1 === null ? 0 : head1.val;
	const val2 = head2 === null ? 0 : head2.val;

	const sum = val1 + val2 + carry;
	const nextCarry = sum > 9 ? 1 : 0;
	const digit = sum % 10;
	const result = new Node(digit);

	const next1 = head1 === null ? null : head1.next;
	const next2 = head2 === null ? null : head2.next;

	result.next = addLists(next1, next2, nextCarry);

	return result;
};
