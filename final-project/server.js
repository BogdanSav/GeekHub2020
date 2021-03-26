const express = require("express");
const {resolve} = require("path");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
const saltRounds = 10;

const Auth = require('./dbSchemas/LoginModel')
require("dotenv/config");
const app = express();

app.use(bodyParser.json());
//CORS settings
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    next();
});
//registration of new user
app.post("/registerUser", async (req, res) => {
    const register = new Auth({
        name: req.body.Name,
        email: req.body.Email,
        password: bcrypt.hashSync(req.body.Password, saltRounds),
    })
    try {
        const savedUser = await register.save();
        console.log(savedUser);
    } catch (err) {
        console.log(err);
    }
})
//auth
app.post("/loggingIn",  async(req, res) => {
    try {
         const email = await Auth.exists({email: req.body.Email});
         const password = await Auth.findOne({email:req.body.Email},"password");
         if(email&&bcrypt.compareSync(req.body.Password,password.password)){
             res.send({message:true});
         }
    }
    catch (err){
        console.log(err);
    }
})
//connect to DB
mongoose.connect(
    process.env["DB_CONNECTION"],
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("connected to db")
    });
app.listen(5000);