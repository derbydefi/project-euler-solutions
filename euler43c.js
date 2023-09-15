function lexicalPermutation(arr, n, permutations, callback) {
	if (n === 1) {
		callback([...arr]);
	} else {
		for (let i = 0; i < n; i++) {
			lexicalPermutation(arr, n - 1, permutations, callback);
			if (n % 2 === 0) {
				[arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
			} else {
				[arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
			}
		}
	}
}

function generateValidLexicalPermutations(arr, divisibilityArray) {
	let validPermutations = [];
	lexicalPermutation(arr, arr.length, validPermutations, (permute) => {
		const numStr = permute.join("");
		const divisible = divisibilityArray.every((div, idx) => parseInt(numStr.substr(idx + 1, 3)) % div === 0);
		if (divisible) {
			validPermutations.push(permute);
		}
	});
	return validPermutations;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const divisors = [2, 3, 5, 7, 11, 13, 17];

// Precompute all possible three-digit divisible numbers for each divisor
const divisibilityArray = divisors.map(divisor => {
	let arr = [];
	for (let n = 0; n <= 999 / divisor; n++) {
		arr.push(n * divisor);
	}
	return arr;
});

const validPermutations = generateValidLexicalPermutations(digits, divisibilityArray);

let sum = validPermutations.reduce((acc, permute) => acc + parseInt(permute.join("")), 0);

console.log(sum);

