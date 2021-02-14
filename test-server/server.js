const express = require("express");
const PORT = process.env.PORT || 8000;
const {resolve} = require("path");
const fs = require("fs");


const app = express();


app.use(express.static(
    resolve(__dirname, "dist")
));

const items = fs.readFileSync(resolve(__dirname,"todo.json"))
app.get("/all",(req,res)=>{
    res.send(items);
})
app.listen(PORT);