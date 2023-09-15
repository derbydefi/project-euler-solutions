function solver(gridDimensions) {
	let sum = 1;
	let currentNumber = 1;
	let layerSize = 2;
	let cornerCount = 0;

	while (layerSize < gridDimensions) {
		for (let i = 0; i < 4; i++) {
			currentNumber += layerSize;
			sum += currentNumber;
			cornerCount++;

			if (cornerCount === 4) {
				layerSize += 2;
				cornerCount = 0;
			}
		}
	}

	return sum;
}

const gridSize = 1001;
const result = solver(gridSize);
console.log(result);
