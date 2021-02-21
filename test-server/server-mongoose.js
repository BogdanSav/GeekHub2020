const express = require("express");

const {resolve} = require("path");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(
    express.static(resolve(__dirname, "dist"))
);

app.listen(PORT);