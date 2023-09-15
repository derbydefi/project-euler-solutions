let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function lexiPermu(digitArray, n, permutations) {
	if (n === 1) {
		permutations.push([...digitArray]);
	} else {
		for (let i = 0; i < n; i++) {
			lexiPermu(digitArray, n - 1, permutations);
			if (n % 2 === 0) {
				[digitArray[i], digitArray[n - 1]] = [digitArray[n - 1], digitArray[i]];
			} else {
				[digitArray[0], digitArray[n - 1]] = [digitArray[n - 1], digitArray[0]];
			}
		}
	}
}
function solver(digitArray) {
	let permutations = [];
	lexiPermu(digits, digitArray.length, permutations);
	permutations.sort();
	let count = 0;
	for (let permutation of permutations) {
		count += 1;
		console.log(permutation);
		if (count === 1000000) {
			console.log(`the`, count, `th permutations is`, permutation);
			return;
		}
	}
}
let start = performance.now();
solver(digits);
let end = performance.now();
console.log(`time:`, end - start);
