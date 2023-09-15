let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let sundays = 0;
let day = 1;
for (let year = 1901; year < 2000; year++) {
	for (let month = 0; month < 12; month++) {
		if (year % 4 === 0) {
			daysInMonths[1] = 29;
			if (year % 100 === 0 && year % 400 !== 0) {
				daysInMonths[1] = 28;
			}
		} else {
			daysInMonths[1] = 28;
		}
		day = (day + daysInMonths[month]) % 7;
		if (day === 0) {
			sundays++;
		}
	}
}
console.log(sundays);
