const limit = 1e6;
function isPalindromic(n) {
	const reverseNum = (n) =>
		parseFloat(n.toString().split("").reverse().join(""));
	return parseInt(n) === reverseNum(n) ? true : false;
}
function toBinary(n) {
	// only works for positive numbers
	return n.toString(2);
}
function solver(upperLimit) {
	let sum = 0;
	for (let index = 1; index < upperLimit; index++) {
		if (isPalindromic(index) && isPalindromic(toBinary(index))) {
			// console.log(
			// 	index,
			// 	isPalindromic(index),
			// 	`and`,
			// 	toBinary(index),
			// 	isPalindromic(toBinary(index))
			// );
			sum += index;
		}
	}
	return sum;
}
console.log(solver(limit));
