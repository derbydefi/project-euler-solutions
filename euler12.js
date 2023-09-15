function triNumber(terms) {
	let sum = 0;
	for (let index = 0; index <= terms; index++) {
		sum += index;
	}
	return sum;
}
function divisors(number) {
	let divisorCount = 0;

	for (let index = 1; index <= Math.sqrt(number); index++) {
		if (number % index === 0) {
			divisorCount += 2;
		}
	}
	if (Math.sqrt(number) % 1 === 0) {
		divisorCount--;
	}
	return divisorCount;
}
function solver() {
	let i = 1;
	while (true) {
		if (divisors(triNumber(i)) >= 500) {
			console.log(divisors(triNumber(i)));
			return triNumber(i);
		} else {
			i++;
		}
	}
}
console.log(solver());
