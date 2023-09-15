function collatz(n) {
	let chain = 0;
	while (n !== 1) {
		if (n % 2 === 0) {
			n = n / 2;
			chain++;
		} else {
			n = 3 * n + 1;
			chain++;
		}
	}
	return chain;
}

function solver() {
	let maxChain = 0;
	let maxChainStartingNumber;
	for (let number = 1; number < 1000000; number++) {
		let chainLength = collatz(number);
		if (chainLength > maxChain) {
			maxChain = chainLength;
			maxChainStartingNumber = number;
		}
	}
	return { max: maxChain, startingNum: maxChainStartingNumber };
}
var start = performance.now();
console.log(solver());
var end = performance.now();
console.log(`exec time: ${end - start} ms`);
