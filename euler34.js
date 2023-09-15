const memoize = (func) => {
	const cache = new Map();
	return (n) => {
		if (!cache.has(n)) {
			cache.set(n, func(n));
		}
		return cache.get(n);
	};
};
const factorial = (n) => {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
};
const memoFactorial = memoize(factorial);
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let factorials = digits.map((n) => {
	return memoFactorial(n);
});

function isCurious(n) {
	const digits = n.toString().split(``).map(Number);
	const sum = digits.reduce((sum, digits) => sum + memoFactorial(digits), 0);
	return n === sum;
}
const upperLimit = 1000000; // arbitrary?
function findCuriousNumbersSum(limit) {
	let sum = 0;
	for (let i = 10; i <= limit; i++) {
		console.log(`test ${i}`);
		if (isCurious(i)) {
			sum += i;
		}
	}
	return sum;
}
console.log(findCuriousNumbersSum(upperLimit));
