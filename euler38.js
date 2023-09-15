const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isPandigital = (n) => {
	const arr = n.toString().split(``);
	if (arr.length !== digits.length) {
		return false;
	}
	let numArr = arr.map(Number);
	return digits.every((digit) => numArr.includes(digit));
};
function findLargestPandigitalMultiple() {
	let largestPandigital = 0;
	for (let i = 9876; i >= 9182; i--) {
		let concatenated = "";
		let n = 1;
		while (concatenated.length < 9) {
			concatenated += (i * n).toString();
			n++;
		}
		if (isPandigital(concatenated)) {
			largestPandigital = Math.max(largestPandigital, parseInt(concatenated));
		}
	}
	return largestPandigital;
}
console.log(findLargestPandigitalMultiple());
