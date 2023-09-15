const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const divisors = [2, 3, 5, 7, 11, 13, 17];

function lexicalPermutation(arr, n, permutations) {
	if (n === 1) {
		permutations.push([...arr]);
	} else {
		for (let i = 0; i < n; i++) {
			lexicalPermutation(arr, n - 1, permutations);
			if (n % 2 === 0) {
				[arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
			} else {
				[arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
			}
		}
	}
}

function generateLexicalPermutations(arr) {
	let permutations = [];
	lexicalPermutation(arr, arr.length, permutations);
	return permutations;
}

function isDivisible(str, divisors) {
	for (let i = 0; i < divisors.length; i++) {
		const num = parseInt(str.substring(i + 1, i + 4));
		if (num % divisors[i] !== 0) {
			return false;
		}
	}
	return true;
}

const digitsPermutations = generateLexicalPermutations(digits);

let sum = 0;
digitsPermutations.forEach((permute) => {
	const numStr = permute.join("");
	if (isDivisible(numStr, divisors)) {
		const num = parseInt(numStr);
		sum += num;
	}
});

console.log(sum);
