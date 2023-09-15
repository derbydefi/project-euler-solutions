// `x`+`y` / `y` + `z` === x / z
let arr = [];
for (let x = 1; x <= 9; x++) {
	for (let y = 1; y <= 9; y++) {
		for (let z = 1; z <= 9; z++) {
			let xy = parseInt(x.toString().concat(y));
			let yz = parseInt(y.toString().concat(z));
			if (xy / yz === x / z && x / y < 1) {
				//console.log(xy, yz, x, z);
				arr.push([xy, yz]);
			}
		}
	}
}

let nums = [];
let dens = [];
arr.forEach((x) => {
	nums.push(x.shift());
	dens.push(x.pop());
});
let num = nums.reduce((x, y) => {
	return x * y;
});
let den = dens.reduce((x, y) => {
	return x * y;
});
let solution = den / num;
console.log(solution);
