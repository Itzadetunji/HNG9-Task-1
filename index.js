const express = require("express");
const app = express();
const port = 3000;
const logger = require("morgan");

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
app.use(logger("dev"));
app.get("/", (req, res) => {
	res.json({
		slackUsername: "itzadetunji",
		backend: true,
		age: 17,
		bio: "I am a web developer from Nigeria working to transform the world.",
	});
});
