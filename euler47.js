const upperBound = 1e6;
const lowerBound = 2 ** 4;

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
const primesSet = new Set();
primes.forEach((x) => primesSet.add(x));

function primeFactors(x, y = 0, factors = []) {
	while (x > 1 && primes[y] <= x) {
		if (x % primes[y] === 0) {
			factors.push(primes[y]);
			x /= primes[y];
		} else {
			y++;
		}
	}
	return factors;
}

function distinctNumbers(arr) {
	return [...new Set(arr)];
}
for (let index = 1; index < 1e7; index += 4) {
	let a = distinctNumbers(primeFactors(index + 0));
	let b = distinctNumbers(primeFactors(index + 1));
	let c = distinctNumbers(primeFactors(index + 2));
	let d = distinctNumbers(primeFactors(index + 3));
	//console.log(a, b, c, d);
	if (a.length === 4 && b.length === 4 && c.length === 4 && d.length === 4) {
		console.log(index, a,primeFactors(index + 0));
		console.log(index + 1, b,primeFactors(index + 1));
		console.log(index + 2, c,primeFactors(index + 2));
		console.log(index + 3, d,primeFactors(index + 3));
		console.log(`\n`);
		break;
	}
}
