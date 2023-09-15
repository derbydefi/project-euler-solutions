// for (let divisor = 1; divisor < 1000; divisor++) {

// 	let bigNum = BigInt(1);
// 	let bigDiv = BigInt(divisor);

// 	let fraction = bigNum / bigDiv;

// 	console.log(`div:`, divisor, `ans:`, fraction.toString());
// }

function reciprocalCycles() {
	let maxCycleLength = 0;
	let result = 0;

	for (let d = 2; d < 1000; d++) {
		let remainder = 1;
		let cycleLength = 0;
		const remainders = new Map();

		while (remainder !== 0 && !remainders.has(remainder)) {
			remainders.set(remainder, cycleLength);
			remainder = (remainder * 10) % d;
			cycleLength++;
		}

		if (cycleLength > maxCycleLength) {
			maxCycleLength = cycleLength;
			result = d;
		}
	}

	return result;
}

console.log(reciprocalCycles());
