const express = require("express");
const app = express();
const logger = require("morgan");
let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.use(logger("dev"));

app.get("/", (req, res) => {
	res.json({
		slackUsername: "itzadetunji",
		backend: true,
		age: 17,
		bio: "I am a web developer trying his best :) to become a better person and transform the world",
	});
});
