// n**2 + n + 41   for 0<=n<=39 each n will be a prime number
// n**2 - 79n + 1601 for 0<=n<=79 for each n will be prime

// n**2 + a*n + b   for |a| < 1000 and |b| <=1000
//                  for

function sieveOfEratosthenes(limit) {
	const primes = new Array(limit + 1).fill(true);
	primes[0] = primes[1] = false;

	for (let i = 2; i <= Math.sqrt(limit); i++) {
		if (primes[i]) {
			for (let j = i ** 2; j <= limit; j += i) {
				primes[j] = false;
			}
		}
	}

	return primes;
}

function solver() {
	const limit = 1000;

	// Generate primes up to the limit
	const primes = sieveOfEratosthenes(limit);

	let maxPrimes = 0;
	let bestA = 0;
	let bestB = 0;

	for (let a = -limit + 1; a < limit; a++) {
		for (let b = -limit; b <= limit; b++) {
			if (!primes[Math.abs(b)]) {
				continue;
			}

			let n = 0;
			let quad = b;

			while (primes[Math.abs(quad)]) {
				n++;
				quad = n * n + a * n + b;
			}

			if (n > maxPrimes) {
				maxPrimes = n;
				bestA = a;
				bestB = b;
			}
		}
	}

	return [maxPrimes, bestA, bestB];
}

const solution = solver();
const answer = solution[1] * solution[2];
console.log(answer);
