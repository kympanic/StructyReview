/*
Write a function, longestStreak, that takes in the head of a linked list as an argument. 
The function should return the length of the longest consecutive streak of the same value within the list.
*/

const longestStreak = (head) => {
	let current = head;
	let currentStreak = 0;
	let maxStreak = 0;
	let prev = null;
	while (current !== null) {
		if (current.val === prev) {
			currentStreak += 1;
		} else {
			currentStreak = 1;
		}

		if (currentStreak > maxStreak) {
			maxStreak = currentStreak;
		}
		prev = current.val;
		current = current.next;
	}

	return maxStreak;
};
