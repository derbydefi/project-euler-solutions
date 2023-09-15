/*
binomial coefficient 
(n k) = n! / (k! * (n - k)!)
n = 2 * k
k = 20 for 20x20 grid
*/
function factorial(x) {
	let product = 1;
	for (let y = x; y >= 1; y--) {
		product *= y;
	}
	return product;
}
let solution = factorial(2 * 20) / (factorial(20) * factorial(20));
