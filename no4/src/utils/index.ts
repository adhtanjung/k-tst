export const whichOperator = (x: any) => {
	const op = ["+", "-", "*", "/", "**", "%"];
	for (let i = 0; i < op.length; i++) {
		if (eval(`${x[0]}${op[i]}${x[1]}`) == x[2]) {
			return `${x[0]}${op[i] == "**" ? "^" : op[i]}${x[1]}=${x[2]}`;
		} else if (eval(`${x[1]}${op[i]}${x[2]}`) == x[0]) {
			return `${x[0]}=${x[1]}${op[i] == "**" ? "^" : op[i]}${x[2]}`;
		}
	}
};
