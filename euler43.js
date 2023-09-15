const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const divisors = [2, 3, 5, 7, 11, 13, 17];
const isPandigital = (n, digits) => {
	const arr = n.toString().split(``);
	if (arr.length !== digits.length) {
		return false;
	}
	let numArr = arr.map(Number);
	return digits.every((digit) => numArr.includes(digit));
};
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
const digitsPermutations = generateLexicalPermutations(digits);
//console.log(digitsPermutations.length);

function isDivisible(n, divisors) {
	const l = n.length;
	//console.log(`l:`, l);
	//console.log(n.toString().slice(1, 4));
	for (let divs = 0; divs < divisors.length; divs++) {
		if (
			!(parseInt(n.toString().slice(1 + divs, 4 + divs)) % divisors[divs] === 0)
		) {
			return false;
		}
	}
	console.log(`herererere`);
	return true;
}
let sum = 0;
let arr = [];
digitsPermutations.forEach((permute) => {
	console.log(permute);
	if (isDivisible(permute, divisors)) {
		arr.push(permute);
	}
	console.log(arr);
});
