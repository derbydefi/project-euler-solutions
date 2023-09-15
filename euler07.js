// create a list 2 through n
// initialize p as 2
//

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
let primes = sieve(110000);
console.log(primes[10000]);
