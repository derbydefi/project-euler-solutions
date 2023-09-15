function pentagonal(n) {
	return (n * (3 * n - 1)) / 2;
}

function isPentagonal(num) {
	const n = (Math.sqrt(24 * num + 1) + 1) / 6;
	return n === Math.floor(n);
}

const upperBound = 1e5;
let minDiff = Infinity;

for (let j = 1; j <= upperBound; j++) {
	for (let k = j + 1; k <= upperBound; k++) {
		const pentagonalJ = pentagonal(j);
		const pentagonalK = pentagonal(k);
		const sum = pentagonalJ + pentagonalK;
		const diff = Math.abs(pentagonalJ - pentagonalK);
		if (diff >= minDiff) {

			break; 
		}

		if (isPentagonal(sum) && isPentagonal(diff)) {
			minDiff = diff;
			console.log(`Pj=${pentagonal(j)}, Pk=${pentagonal(k)}, D=${diff}`);
		}
	}
}
