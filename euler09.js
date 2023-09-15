//   a^2 + b^2 = c^2
//  a < b < c
// a + b + c = 1000

function isTriple(a, b, c) {
	return a ** 2 + b ** 2 === c ** 2;
}

function findTriples(sum) {
	let triples = [];

	for (let a = 0; a < sum; a++) {
		for (let b = a; b < sum; b++) {
			c = sum - a - b;
			if (isTriple(a, b, c)) {
				triples.push([a, b, c]);
			}
		}
	}
	return triples;
}
function main() {
	let triples = findTriples(1000);
	for (let [a, b, c] of triples) {
		if (a < b && b < c) {
			console.log(a, b, c);
		}
	}
}
main();
