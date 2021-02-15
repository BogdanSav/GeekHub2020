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
const items = fs.readFileSync(resolve(__dirname,"todo.json"))
app.get("/all",(req,res)=>{
    res.send(items);
})
app.post("/post",(req,res)=>{
    console.log(req.body);
    fs.writeFile('todo.json', JSON.stringify(req.body), 'utf8', ()=>{});
})
app.listen(PORT);