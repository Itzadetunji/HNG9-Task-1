const handleOperation = (req, res) => {
	let result;
	let { x, y } = req.body;
	let { operation_type } = req.body;
	operation_type = operation_type.toLowerCase();
	if (!parseInt(x) || !parseInt(y)) {
		return res
			.status(400)
			.json({ Error: "The input provided are not integers" });
	} else {
		x = parseInt(x);
		y = parseInt(y);
	}
	const operators = {
		ADDITION: "addition",
		SUBTRACTION: "subtraction",
		MULTIPLICATION: "multiplication",
	};
	switch (operation_type.trim().toLowerCase()) {
		case operators.ADDITION:
			result = x + y;
			break;
		case operators.SUBTRACTION:
			result = x - y;
			break;
		case operators.MULTIPLICATION:
			result = x * y;
			break;
		default:
			result = "I cannot do that calculation 😭";
	}
	return res
		.status(200)
		.json({ slackUsername: "itzadetunji", result, operation_type });
};

module.exports = {
	handleOperation,
};
