function isRightTriangle([a, b, c], perimeter) {
	return a ** 2 + b ** 2 === c ** 2 && a + b + c === perimeter;
}
function howManySolutions(perimeter) {
	let solutions = 0;
	for (let a = 1; a < 499; a++) {
		for (let b = 1; b < 499; b++) {
			let c = Math.sqrt(a ** 2 + b ** 2);
			if (isRightTriangle([a, b, c], perimeter)) {
				solutions++;
			}
		}
	}
	return solutions;
}
function solver() {
	let bestP = 0;
	for (let index = 0; index <= 1000; index++) {
		console.log(`testing ${index}`);
		let solutions = howManySolutions(index);
		if (solutions > bestP) {
			bestP = index;
		}
	}
	return bestP;
}
console.log(solver());
