function solver() {
	let numberString = BigInt(2 ** 1000);
	let arr = Array.from(numberString.toString());
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		sum += parseInt(arr[index]);
	}
	return sum;
}
solver();
