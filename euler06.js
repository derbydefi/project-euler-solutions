//

function sumOfSquares(num) {
	let sum = 0;
	for (let index = 0; index < num + 1; index++) {
		sum = sum + index * index;
	}
	return sum;
}

function squareOfSums(num) {
	let sum = 0;
	for (let index = 0; index < num + 1; index++) {
		sum = sum + index;
	}
	return sum * sum;
}

function sumSquareDiff(num) {
	let diff = squareOfSums(num) - sumOfSquares(num);
	//console.log(diff);
	return diff;
}
console.log(sumSquareDiff(100));
