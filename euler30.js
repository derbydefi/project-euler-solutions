// find all the numbers that can be written as the sum of the fifth power of their digits
// add up all the numbers

// 1634 = 1**4 + 6**4 + 3**4 + 4**4
// y = a**5 + b**5 + c**5 + d**5
// y = 'a+b+c+d' concat

function solver() {
	let sums = [];
	let solution = 0;
	let number = 10000000;
	for (let y = 2; y < number; y++) {
		let yArr = y.toString().split(``);
		let sum = 0;
		yArr.forEach((x) => {
			//console.log(x ** 5);
			sum += x ** 5;
		});
		//console.log(yArr, sum);
		if (y === sum) {
			//console.log(y, sum);
			sums.push(sum);
		}
	}
	sums.forEach((element) => {
		solution += element;
	});
	return solution;
}
console.log(solver());
