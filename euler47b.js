const upperBound = 1e6;
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
function distinctPrimeFactorsCount(n) {
	let count = 0;
	for (const prime of primes) {
		if (prime * prime > n) break;
		if (n % prime === 0) {
			count++;
			while (n % prime === 0) {
				n /= prime;
			}
		}
	}
	if (n > 1) {
		count++;
	}
	return count;
}
for (let index = 1; index <= upperBound; index++) {
	let a = distinctPrimeFactorsCount(index);
	let b = distinctPrimeFactorsCount(index + 1);
	let c = distinctPrimeFactorsCount(index + 2);
	let d = distinctPrimeFactorsCount(index + 3);
	if (a === 4 && b === 4 && c === 4 && d === 4) {
		console.log(index);
		break;
	}
}
