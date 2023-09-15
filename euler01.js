// for ever number below 1000, if its divisible by 3 or 5, add that number to the sum

function sum(number) {
	let sum = 0;
	for (let index = 0; index < number; index++) {
		if (index % 3 === 0 || index % 5 === 0) {
			sum += index;
		}
	}
	return sum;
}

//testing

console.log(sum(1000));
