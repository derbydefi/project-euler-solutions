
function divisorSum(number) {
	let sum = 0;
	for (let index = 1; index < number; index++) {
		if (number % index === 0) {
			sum += index;
		}
	}
	return sum;
}
function amicableCheck(x, y) {
	if (divisorSum(x) === y && divisorSum(y) === x && x !== y) {
		return true;
	} else {
		return false;
	}
}
function solver() {
	let sum = 0;
	let arbitrary = 10000;
	for (let number = 1; number < arbitrary; number++) {
		if (amicableCheck(number, divisorSum(number))) {
			sum += number;
		}
	}
	return sum;
}
console.log(solver());
