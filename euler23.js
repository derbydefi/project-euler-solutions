function divisorSum(number) {
	let sum = 0;
	for (let index = 1; index < number; index++) {
		if (number % index === 0) {
			sum += index;
		}
	}
	return sum;
}
function abundantCheck(n) {
	let sum = divisorSum(n);
	if (sum > n) {
		return true;
	}
}
let abuns = [];
for (let index = 12; index < 28123; index++) {
	if (abundantCheck(index)) {
		abuns.push(index);
	}
}
let sumAbuns = new Array(28123).fill(false);
for (let i = 0; i < abuns.length; i++) {
	for (let j = i; j < abuns.length; j++) {
		let sum = abuns[i] + abuns[j];
		if (sum < 28123) {
			sumAbuns[sum] = true;
		}
	}
}
let solution = 0;
for (let index = 0; index < sumAbuns.length; index++) {
	if (!sumAbuns[index]) {
		solution += index;
	}
}

console.log(solution);
