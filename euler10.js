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
	let sum = 0;
	for (let index = 2; index <= n; index++) {
		if (a[index]) {
			primes.push(index);
			sum += index;
		}
	}

	return {
		primes: primes,
		sum: sum,
	};
}
let limit = 2000000;
let result = sieve(limit);
console.log(result.primes, result.sum);
