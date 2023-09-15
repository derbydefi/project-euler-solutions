function fib(maximum) {
	function binetsFormula(n) {
		const phi = (1 + Math.sqrt(5)) / 2;
		const psi = (1 - Math.sqrt(5)) / 2;
		return BigInt(
			Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5))
		);
	}

	let digits;
	let i = 1;
	let num = 1;
	while (num.toString().length <= maximum) {
		num = binetsFormula(i);
		console.log(num, num.toString().length);

		i++;
	}
}

//let solution = fib(1000);
