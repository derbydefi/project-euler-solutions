let sum = BigInt(0);
for (let index = 1000; index >= 1; index--) {
	sum += BigInt(index) ** BigInt(index);
}
console.log(sum.toString().slice(-10));
