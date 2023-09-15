const upperBound = 2e6;
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

let constraint = 1000000; 

function sumEval(x = 0) {
	let sums = [];
	let sum = 0;
	let y = 1 + x;
	while (sum < constraint) {
		let slice = primes.slice(x, y);

		sum = slice.reduce((x, y) => x + y);
		if (primes.includes(sum)) {
			sums.push([sum, y - x]);
		}

		y++;
		//console.log(`here`, sum);
	}
	return sums;
}

console.log(sumEval(3).pop()[0]);
