function primeFactory(number) {
	let factors = [];
	let div = 2;

	while (number >= 2) {
		if (number % div == 0) {
			factors.push(div);
			number = number / div;
		} else {
			div++;
		}
	}
	return factors;
}
console.log(primeFactory(600851475143));
