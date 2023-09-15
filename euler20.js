//factorial function from problem #15
function factorial(x) {
	let product = BigInt(1);
	for (let y = x; y >= 1; y--) {
		product *= BigInt(y);
	}
	return product;
}
let string = factorial(100).toString();
let arr = string.split("");
let sum = 0;
arr.forEach((element) => {
	sum += parseInt(element);
});
console.log(`sum is ${sum}`);
