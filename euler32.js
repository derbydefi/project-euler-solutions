// x * y = z
// "x" + "y" + "z" if concat number has all digits

function solver(permutations) {
	let solutions = [];
	let sum = 0;
	for (let i = 0; i < permutations.length; i++) {
		let x = permutations[i][0].toString().concat(permutations[i][1]);
		let y = permutations[i][2]
			.toString()
			.concat(permutations[i][3])
			.concat(permutations[i][4]);
		let z = permutations[i][5]
			.toString()
			.concat(permutations[i][6])
			.concat(permutations[i][7])
			.concat(permutations[i][8]);

		if (parseInt(x) * parseInt(y) === parseInt(z)) {
			//solutions.push(permutations[i]);

			sum += parseInt(z);
			console.log(sum);
		}
	}
	console.log(sum);
	return solutions;
}

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

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let permutations = genPermutations(digits);
console.log(solver(permutations));
