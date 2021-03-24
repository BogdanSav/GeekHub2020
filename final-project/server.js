const express = require("express");
const {resolve} = require("path");
const bodyParser = require("body-parser")
const app = express();

 app.use(bodyParser.json());
 app.use((req,res, next)=>{
     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
     res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
     next();
 });

app.post("/registerUser",(req,res)=>{
    console.log(req.body);
})
app.listen(5000);