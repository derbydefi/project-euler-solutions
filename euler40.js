function generateDecimal() {
	let decimalString = ``;
	for (let index = 1; index < 1e6; index++) {
		decimalString = decimalString.concat(index);
	}
	return `0`.concat(decimalString);
}
let bigString = generateDecimal();
let a = parseInt(bigString.charAt(1));
let b = parseInt(bigString.charAt(1e1));
let c = parseInt(bigString.charAt(1e2));
let d = parseInt(bigString.charAt(1e3));
let e = parseInt(bigString.charAt(1e4));
let f = parseInt(bigString.charAt(1e5));
let g = parseInt(bigString.charAt(1e6));
const solution = a * b * c * d * e * f * g;
console.log(solution);
