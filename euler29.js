// find the number of distinct terms found in a**b
// for:
// 2 <= a <= 100
// 2 <= b <= 100

function solver() {
	let terms = [];
	for (let a = 2; a <= 100; a++) {
		for (let b = 2; b <= 100; b++) {
			let term = a ** b;
			if (!terms.includes(term)) {
				terms.push(term);
			}
		}
	}
	return terms.length;
}
let answer = solver();
console.log(answer);
