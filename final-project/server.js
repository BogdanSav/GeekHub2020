const express = require("express");
const {resolve} = require("path");
const bodyParser = require("body-parser")
const app = express();
const email = "test@test.com"
const passw = "123";
 app.use(bodyParser.json());
 app.use((req,res, next)=>{
     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
     res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
     next();
 });

app.post("/registerUser",(req,res)=>{
    console.log(req.body);
})
app.post("/loggingIn",(req,res)=>{
    console.log(req.body)
    if(req.body.Email ===email && req.body.Password === passw){
        res.send({message:true});
    }
})

app.listen(5000);