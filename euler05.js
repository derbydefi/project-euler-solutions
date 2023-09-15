// smallest number modulo 0 for all number between 1 to 20

// number mod 20,

function multiples() {
	let num = 1;
	let max = 20;
	while (true) {
		if (
			num % max === 0 &&
			num % (max - 1) === 0 &&
			num % (max - 2) === 0 &&
			num % (max - 3) === 0 &&
			num % (max - 4) === 0 &&
			num % (max - 5) === 0 &&
			num % (max - 6) === 0 &&
			num % (max - 7) === 0 &&
			num % (max - 8) === 0 &&
			num % (max - 9) === 0 &&
			num % (max - 10) === 0 &&
			num % (max - 11) === 0 &&
			num % (max - 12) === 0 &&
			num % (max - 13) === 0 &&
			num % (max - 14) === 0 &&
			num % (max - 15) === 0 &&
			num % (max - 16) === 0 &&
			num % (max - 17) === 0 &&
			num % (max - 18) === 0 &&
			num % (max - 19) === 0
		) {
			return num;
		} else {
			num++;
		}
	}
}
console.log(multiples());
