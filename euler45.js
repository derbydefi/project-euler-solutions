function triangle(n) {
	return (n * (n + 1)) / 2;
}
function pentagonal(n) {
	return (n * (3 * n - 1)) / 2;
}
function hexagonal(n) {
	return n * (2 * n - 1);
}
function solver() {
	let x = 1;
	let y = 1;
	let z = 1;
	let solutions = [];
	while (solutions.length < 3) {
		let aX = triangle(x);
		let bY = pentagonal(y);
		let cZ = hexagonal(z);
		if (aX === bY && bY === cZ) {
			console.log(`Found: a(${x}) = b(${y}) = c(${z}) = ${aX}`);
			solutions.push(aX);
		}
		const minVal = Math.min(aX, bY, cZ);
		if (minVal === aX) {
			x++;
		}
		if (minVal === bY) {
			y++;
		}
		if (minVal === cZ) {
			z++;
		}
	}
}
solver();
