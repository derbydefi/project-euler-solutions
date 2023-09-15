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
let primes = sieve(1000000);

function rotate(arr) {
	const first = arr[0];
	const rotated = arr.slice(1);
	rotated.push(first);
	return rotated;
}

function rotater(x, arr) {
	let newArr = [...arr];
	if (x > 0) {
		newArr = rotate(arr);
		return rotater(x - 1, newArr);
	}
	return newArr;
}
function numtoArr(n) {
	return Array.from(String(n), Number);
}
function arrayToNumber(arr) {
	return arr.reduce((acc, digit) => acc * 10 + digit, 0);
}
function isCircular(n) {
	const arr = numtoArr(n);
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		if (!primes.includes(arrayToNumber(rotater(i, arr)))) {
			return false;
		}
	}
	return true;
}
function solver() {
	let circularPrimes = [];
	primes.forEach((n) => {
		if (isCircular(n)) {
			circularPrimes.push(n);
		}
	});
	return circularPrimes.length;
}
console.log(solver());
