function sieve(n) {
	let a = new Array(n + 1).fill(true);
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (a[i]) {
			for (let j = i * i; j <= n; j += i) {
				a[j] = false;
			}
		}
	}
	let primes = [];
	for (let index = 2; index <= n; index++) {
		if (a[index]) {
			primes.push(index);
		}
	}
	return primes;
}
const limit = 1e6;
const primes = sieve(limit);
function truncatableLeft(n) {
	//if subsection length - 1 offset from left is prime
	// if all possible leftwards subsections are prime
	const length = n.toString().length;
	for (let index = 0; index < length; index++) {
		if (!primes.includes(parseInt(n.toString().substring(index, length)))) {
			return false;
		}
	}
	return true;
}
function truncatableRight(n) {
	const length = n.toString().length;
	for (let index = 0; index < length; index++) {
		if (!primes.includes(parseInt(n.toString().substring(0, length - index)))) {
			return false;
		}
	}
	return true;
}
const leftPrimes = primes.filter(truncatableLeft);
const leftRightPrimes = leftPrimes.filter(truncatableRight);
const sum = leftRightPrimes.reduce(
	(accum, currentValue) => accum + currentValue
);
const exceptions = [2, 3, 5, 7];
const sumOfExceptions = exceptions.reduce((x, y) => x + y);
console.log(sum - sumOfExceptions);
