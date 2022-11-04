const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000;

const { handleOperation } = require("./controller");

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
	})
);

app.get("/", (req, res) => {
	res.json({
		slackUsername: "itzadetunji",
		backend: true,
		age: 17,
		bio: "I am a web developer trying his best :) to become a better person and transform the world",
	});
});

app.post("/stage2", handleOperation);
