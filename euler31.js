let coins = [1, 2, 5, 10, 20, 50, 100, 200];
let target = 200;
function solver(coins, target) {
	let combinations = new Array(target + 1).fill(0);
	combinations[0] = 1;
	for (let coin = 0; coin < coins.length; coin++) {
		for (let i = 1; i < combinations.length; i++) {
			if (i >= coins[coin]) {
				combinations[i] += combinations[i - coins[coin]];
			}
		}
	}
	return combinations[target];
}
console.log(solver(coins, target));
