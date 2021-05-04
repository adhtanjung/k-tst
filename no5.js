const eg = [5, 1, 0];
function equalArr(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

function equally(input) {
	let result = input.reduce((x, y) => x + y);
	let n = result / input.length;
	let expected = new Array(input.length);
	const arr = expected.fill(n);
	let steps = 0;
	let currentArr = input;

	while (!equalArr(arr, currentArr)) {
		let max = Math.max(...currentArr);
		let iMax = currentArr.findIndex((zx) => {
			return zx === max;
		});
		for (let i = 0; i < currentArr.length; i++) {
			if (iMax == currentArr.length - 1 && currentArr[iMax] > n) {
				if (currentArr[iMax - 1] < n && currentArr[iMax - 1] >= 0) {
					currentArr[iMax - 1] = currentArr[iMax - 1] + 1;
					currentArr[iMax] = currentArr[iMax] - 1;
				}
				if (currentArr[iMax - 1] > 0) {
					if (currentArr[iMax - 2] >= 0 && currentArr[iMax - 2] < 2) {
						currentArr[iMax - 2] = currentArr[iMax - 2] + 1;
						currentArr[iMax - 1] = currentArr[iMax - 1] - 1;
					} else if (currentArr[iMax - 2] > 2 && currentArr[iMax - 1] < 2) {
						currentArr[iMax - 2] = currentArr[iMax - 2] - 1;
						currentArr[iMax - 1] = currentArr[iMax - 1] + 1;
					}
				}
				steps++;
			} else if (iMax === currentArr.length - 2 && currentArr[iMax] > n) {
				if (currentArr[iMax - 1] >= 0 && currentArr[iMax - 1] < n) {
					currentArr[iMax - 1] = currentArr[iMax - 1] + 1;
					currentArr[iMax] = currentArr[iMax] - 1;
				} else if (currentArr[iMax + 1] < n && currentArr[iMax] > n) {
					currentArr[iMax + 1] = currentArr[iMax + 1] + 1;
					currentArr[iMax] = currentArr[iMax] - 1;
				}
				steps++;
			} else if (iMax === currentArr.length - 3 && currentArr[iMax] > n) {
				if (currentArr[iMax + 1] < n) {
					currentArr[iMax + 1] = currentArr[iMax + 1] + 1;
					currentArr[iMax] = currentArr[iMax] - 1;
				}
				if (currentArr[iMax + 1] > 0 && currentArr[iMax + 2] < n) {
					currentArr[iMax + 1] = currentArr[iMax + 1] - 1;
					currentArr[iMax + 2] = currentArr[iMax + 2] + 1;
				}
				steps++;
			}
		}
	}

	return steps;
}

console.log(equally(eg));
