let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const genPermutations = (arrayOfDigits) => {
	if (arrayOfDigits.length === 0) {
		return [[]];
	}
	const permutations = [];
	for (let i = 0; i < arrayOfDigits.length; i++) {
		const first = arrayOfDigits[i];
		const rest = arrayOfDigits.slice(0, i).concat(arrayOfDigits.slice(i + 1));
		const subPermutes = genPermutations(rest);
		permutations.push(
			...subPermutes.map((permutation) => [...permutation, first])
		);
	}
	return permutations;
};
let numbersPermutes = genPermutations(numbers);

const slicer = (numbers, x1, x2, y1, y2, z1, z2) => ({
	multiplicand: numbers.slice(x1, x2),
	multiplier: numbers.slice(y1, y2),
	product: numbers.slice(z1, z2),
});
function permuteFilter() {
	let solutions = [];
	for (permutes of numbersPermutes) {
		let slice1 = slicer(permutes, 0, 1, 1, 5, 5, 9); // 1 * 2345 = 6789
		let slice2 = slicer(permutes, 0, 2, 2, 5, 5, 9); // 12 * 345 = 6789
		let slice3 = slicer(permutes, 0, 3, 3, 5, 5, 9); // 123 * 45 = 6789
		let slice4 = slicer(permutes, 0, 4, 4, 5, 5, 9); // 1234 * 5 = 6789

		let test1 = multiplies(
			slice1.multiplicand,
			slice1.multiplier,
			slice1.product
		);
		let test2 = multiplies(
			slice2.multiplicand,
			slice2.multiplier,
			slice2.product
		);
		let test3 = multiplies(
			slice3.multiplicand,
			slice3.multiplier,
			slice3.product
		);
		let test4 = multiplies(
			slice4.multiplicand,
			slice4.multiplier,
			slice4.product
		);
		if (test1) {
			solutions.push(slice1.product);
		}
		if (test2) {
			solutions.push(slice2.product);
		}
		if (test3) {
			solutions.push(slice3.product);
		}
		if (test4) {
			solutions.push(slice4.product);
		}
	}

	return solutions;
}

function multiplies(multiplicand, multiplier, product) {
	return (
		parseInt(multiplicand.join(``)) * parseInt(multiplier.join(``)) ===
		parseInt(product.join(``))
	);
}
let selection = permuteFilter();
let format = new Set();
let formated = selection.forEach((element) => {
	format.add(element.join(``));
});
console.log(selection, format);
let sum = 0;
format.forEach((e) => {
	sum += parseInt(e);
});
console.log(sum);
