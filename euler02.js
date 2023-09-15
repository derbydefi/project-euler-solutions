// find the sum of the the even digits of the frist 4,000,000 digits in the fib sequence

function fib(maximum) {
	// calculate fib sequence into array

	let init = [1, 2];

	while (true) {
		let next = init[init.length - 1] + init[init.length - 2];
		if (next > maximum) {
			break;
		}
		init.push(next);
	}
	return init;
}

let sequence = fib(4000000);
let sum = 0;
for (let index = 0; index < sequence.length; index++) {
	if (sequence[index] % 2 === 0) {
		sum += sequence[index];
	}
}
console.log(sum);
