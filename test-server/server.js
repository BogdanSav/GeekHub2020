const express = require("express");
const PORT = process.env.PORT || 8000;
const {resolve} = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static(
    resolve(__dirname, "dist")
));
app.use(bodyParser.json())

app.get("/all", (req, res) => {
    fs.readFile(resolve(__dirname, "todo.json"), 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data);
    });


})
app.post("/post", (req, res) => {

    fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(req.body, null, 4), 'utf8', (err) => {console.log(err)});
})

app.listen(PORT);