const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");

app.use(cors());

app.get("/api/estatery", (req, res) => {
	res.send(data);
});

app.listen(5000, () => {
	console.log("Litsening on port 5000");
});
