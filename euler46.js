function isPrime(number) {
	if (number <= 1) return false;
	if (number <= 3) return true;
	if (number % 2 === 0 || number % 3 === 0) return false;
	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) {
			return false;
		}
	}
	return true;
}
function findPrimesAndComposites(upperBound) {
	let primes = [];
	let composites = [];
	for (let index = 2; index < upperBound; index++) {
		if (!isPrime(index)) {
			composites.push(index);
		} else {
			primes.push(index);
		}
	}
	return [composites, primes];
}
function twiceOfSquareOf(n) {
	return 2 * n ** 2;
}
const upperBound = 1e4;
const [composites, primes] = findPrimesAndComposites(upperBound);
const doubledSquares = new Array(upperBound)
	.fill(1)
	.map((_, index) => {
		return twiceOfSquareOf(index);
	})
	.slice(1);
const oddComposites = composites.filter((n) => {
	return n % 2 !== 0;
});
function doesSolve(oddComposite, upperBound) {
	for (let i = 0; i < upperBound; i++) {
		for (let j = 0; j < upperBound; j++) {
			let sum = primes[i] + doubledSquares[j];
			if (sum === oddComposite) {
				return true;
			}
			if (sum > oddComposite) {
				break;
			}
		}
	}
	return false;
}
const solution = oddComposites.filter((n) => !doesSolve(n, upperBound));
console.log(solution.shift());
