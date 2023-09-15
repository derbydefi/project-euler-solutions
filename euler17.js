const ones = {
	1: `one`,
	2: `two`,
	3: `three`,
	4: `four`,
	5: `five`,
	6: `six`,
	7: `seven`,
	8: `eight`,
	9: `nine`,
};

const teens = {
	10: `ten`,
	11: `eleven`,
	12: `twelve`,
	13: `thirteen`,
	14: `fourteen`,
	15: `fifteen`,
	16: `sixteen`,
	17: `seventeen`,
	18: `eighteen`,
	19: `nineteen`,
};
const tens = {
	//10: `ten`,
	20: `twenty`,
	30: `thirty`,
	40: `forty`,
	50: `fifty`,
	60: `sixty`,
	70: `seventy`,
	80: `eighty`,
	90: `ninety`,
};
const hundred = `hundred`;
const thousand = `thousand`;
const and = `and`;

function counter(number) {
	if (number === 0) {
		return ``;
	} else if (number < 10) {
		return ones[number];
	} else if (number < 20) {
		return teens[number];
	} else if (number < 100) {
		return tens[Math.floor(number / 10) * 10] + counter(number % 10);
	} else if (number < 1000) {
		if (number % 100 === 0) {
			return ones[Math.floor(number / 100)] + hundred;
		}
		return (
			ones[Math.floor(number / 100)] + hundred + and + counter(number % 100)
		);
	} else if (number === 1000) {
		return ones[number / 1000] + thousand;
	}
}

let totalCount = 0;
for (let index = 1000; index >= 1; index--) {
	totalCount += counter(index).length;
}
console.log(totalCount);
