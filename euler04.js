
function check(numToCheck) {
	//checks if the number is palindromic true/false
	let transformed = numToCheck.toString().split(``).reverse().join(``);
	console.log(`checking if ${transformed} is equal to ${numToCheck}`);
	if (numToCheck == transformed) {
		return true;
	} else {
		return false;
	}
}
function palindrome() {
	// first generate all the palindromes, then return the largest

	//product of two 3 digit numbers, from the smallest to the largest

	let palindromes = [];

	for (let x = 100; x < 999; x++) {
		for (let y = 100; y < 999; y++) {
			let product = x * y;
			if (check(product)) {
				palindromes.push(product);
			}
		}
	}
	console.log(Math.max(...palindromes));
	return palindromes;
}

palindrome();
