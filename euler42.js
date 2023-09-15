const pre = performance.now();
const fs = require(`fs`);
let filePath = `/home/coder/Desktop/0042_words.txt`;

let words = fs.readFileSync(filePath, `utf-8`);
let parsedWords = words.split(`,`).map((x) => x.substring(1, x.length - 1));

let scoreMapping = new Map();
for (let i = 0; i < 26; i++) {
	let letter = String.fromCharCode(65 + i); // A -> Z
	scoreMapping.set(letter, i + 1);
}

const wordValue = (word) => {
	let arr = word.split(``);
	let a = arr.map((x) => {
		return scoreMapping.get(x);
	});
	return a.reduce((x, y) => x + y);
};
const triangleNumbers = (upperBound) => {
	let t = [];
	for (let n = 1; n <= upperBound; n++) {
		t[n - 1] = (n * (n + 1)) / 2;
	}
	return t;
};
const scoreParsedWords = (parsedWords) => {
	let scoredWords = parsedWords.map((word) => {
		return wordValue(word);
	});
	return scoredWords;
};
function solver() {
	let triangleWords = 0;
	const upperBound = 1e2;
	const triangleNumbersArr = triangleNumbers(upperBound);
	const words = scoreParsedWords(parsedWords);

	for (let j = 0; j < parsedWords.length; j++) {
		for (let i = 0; i < triangleNumbersArr.length; i++) {
			if (triangleNumbersArr[i] === words[j]) {
				triangleWords++;
			}
		}
	}
	return triangleWords;
}

console.log(solver());
const post = performance.now();
console.log(post - pre);
