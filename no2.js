function selfNumber() {
	let notSelfNums = [];

	let allNums = [];

	for (let i = 1; i <= 5000; i++) {
		let c = i;
		c = c.toString();
		allNums.push(i);
		n = i.toString().length;
		if (n == 1) {
			let sum = i + parseInt(c[0]);
			notSelfNums.push(sum);
		} else if (n == 2) {
			let sum = i + parseInt(c[0]) + parseInt(c[1]);
			notSelfNums.push(sum);
		} else if (n == 3) {
			let sum = i + parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2]);
			notSelfNums.push(sum);
		} else if (n == 4) {
			let sum =
				i + parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2]) + parseInt(c[3]);
			notSelfNums.push(sum);
		}
	}
	const selfNums = allNums.filter((x) => {
		return !notSelfNums.includes(x);
	});

	return selfNums.reduce((a, b) => a + b);
}

console.log(selfNumber());

// console.log(a.toString().length);
