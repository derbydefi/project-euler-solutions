let filePath = `/home/coder/Desktop/0022_names.txt`;
const fs = require(`fs`);
let contents = fs.readFileSync(filePath, `utf-8`);
let arr = contents.replaceAll(/"|'/g, ``).split(`,`).sort();
let totalscore = 0;
let scoreArr = [];
function sum(i) {
	let sum = 0;
	let subArr = arr[i].slice(0, -1).split(`,`);
	subArr.forEach((element, index) => {
		if (!isNaN(element)) {
			sum += parseInt(element);
		}
	});
	return sum;
}
for (let i = 0; i < 26; i++) {
	let letter = String.fromCharCode(65 + i); // A -> Z
	let score = i + 1;
	for (let index = 0; index < arr.length; index++) {
		arr[index] = arr[index].replaceAll(letter, `${score},`);
	}
}
for (let index = 0; index < arr.length; index++) {
	let stringSum = sum(index);
	let logic = stringSum * (index + 1);
	scoreArr.push(logic);
}
scoreArr.forEach((x) => {
	totalscore += x;
});
console.log(totalscore);
