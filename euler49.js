const upperBound = 1e5;
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
const primes = sieve(upperBound);
const fourDigitPrimes = primes.filter((n) => {
	return n >= 1000 && n <= 9999;
});
function isPermutationOf(x, y) {
	let a = x.toString();
	let b = y.toString();
	return a.split(``).sort().join(``) === b.split(``).sort().join(``);
}
for (let index = 0; index < fourDigitPrimes.length; index++) {
	const a = fourDigitPrimes[index];
	const b = a + 3330;
	const c = b + 3330;
	if (fourDigitPrimes.includes(b) && fourDigitPrimes.includes(c)) {
		if (isPermutationOf(a, b) && isPermutationOf(a, c)) {
			console.log(a.toString() + b + c);
		}
	}
}
