const handleOperation = (req, res) => {
	var result;
	var { x, y } = req.body;
	const { operation_type } = req.body;
	if (!parseInt(x) || !parseInt(y)) {
		return res
			.status(400)
			.json({ Error: "The input provided are not integers" });
	} else {
		x = parseInt(x);
		y = parseInt(y);
	}
	const operators = {
		ADDITION: ["addition", "add", "+", "sum"],
		SUBTRACTION: ["subtraction", "subtract", "-", "minus"],
		MULTIPLICATION: ["multiplication", "multiply", "x", "*", "times"],
	};
	const addOperation = operators.ADDITION.map((add) => add);
	console.log(addOperation);
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
			result = "I cannot do that calculation";
	}
	return res
		.status(200)
		.json({ slackUsername: "itzadetunji", result, operation_type });
};

module.exports = {
	handleOperation,
};
