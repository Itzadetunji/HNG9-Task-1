const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const body = (bodyParser = require("body-parser"));
const port = process.env.PORT || 3000;

const { handleOperation } = require("./controller");

app.use(logger("dev"));
app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/stage2", handleOperation);
app.post("/stage2", handleOperation);

app.listen(port, () => {
	console.log(`Stage 2 task listening on port ${port}`);
});
