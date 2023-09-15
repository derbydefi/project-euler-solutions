function sieve(n) {
	let a = new Array(Math.ceil((n + 1) / 2)).fill(true);
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
function isPanDigital(n) {
	let nString = n.toString();
	const length = nString.length;
	let digitSet = new Set();
	if (length > 9) {
		return false;
	}
	for (let digit = 0; digit < length; digit++) {
		if (
			nString[digit] === `0` ||
			digitSet.has(nString[digit]) ||
			parseInt(nString[digit]) > length
		) {
			return false;
		}
		digitSet.add(nString[digit]);
	}
	return true;
}
const upperLimit = 1e8;
let primes = sieve(upperLimit);
function solver(primes) {
	let pandigitalPrimes = [];
	for (let index = 0; index < primes.length; index++) {
		if (isPanDigital(primes[index])) {
			pandigitalPrimes.push(primes[index]);
		}
	}
	return pandigitalPrimes;
}
console.log(solver(primes).pop());
