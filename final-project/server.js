const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
const saltRounds = 10;

const Auth = require('./dbSchemas/LoginModel');
const UserData = require('./dbSchemas/UserDataModel')
const date = new Date;
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

    try {
        const registerCheck = await Auth.exists({
            "email":req.body.email,
        })
        if(!registerCheck){
        const register = new Auth({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds),
        })
        const newUserData = new UserData({
            name: req.body.name,
            email: req.body.email,
            month: date.getMonth(),
            day: date.getDate(),
            actions: []

        })
            const savedUser = await register.save();
            const saveUserData = await newUserData.save();
            console.log(savedUser, saveUserData);
            res.send({message:"all done", state:true})
        }
        else res.send( {message:"user with this email already existed", state:false})


    } catch (err) {
        console.log(err);
    }
})
//auth
app.post("/loggingIn", async (req, res) => {
    try {
        const email = await Auth.exists({email: req.body.email});
        const password = await Auth.findOne({email: req.body.email}, "password");
        if (email && bcrypt.compareSync(req.body.password, password.password)) {
            res.send({message:{text:"",status:true}});
        }
        else res.send({message:{text:" wrong email or password",status:false}});
    } catch (err) {
        res.send({data:"something went wrong"})
    }
})
//getData
app.post("/getUserData", async (req, res) => {
    console.log(req.body);
    try {
        const usersData = await UserData.find({
            "email": req.body.email,
            "month": req.body.month,
            "day": req.body.day,
        }, "actions");
        res.send({data: usersData[0].actions})

    } catch (err) {
        res.send({data:[]})
    }
});
app.post("/addAction", async (req, res) => {

    try {
        const data = await UserData.exists({
            "email": req.body.email,
            "month": req.body.month,
            "day": req.body.day,
        })

        if (data) {
            const usersData = await UserData.findOne({
                "email": req.body.email,
                "month": req.body.month,
                "day": req.body.day,
            }, "actions")
            usersData.actions = req.body.item;
            try {
                const savedData = await usersData.save();
                console.log(savedData);
            } catch (e) {
                console.log(e);
            }
        } else {
            const usersData = await UserData.create({
                "name": "bogdan",
                "email": req.body.email,
                "month": req.body.month,
                "day": req.body.day,
                "actions": req.body.item
            })
            console.log(usersData);
        }


    } catch (err) {
        res.send({data:"something went wrong"})
    }
})
app.post("/getActionsCount", async (req, res) => {
    console.log(req.body);
    try {
        const actionsCount = await UserData.find({
            "email": req.body.email,
            "month": req.body.id
        }, "actions day",{new:true});
        let countOfActions = {}
        actionsCount.forEach((item) => {
            Object.assign(countOfActions, {[item.day]: item.actions.length});
        })
        res.send(countOfActions)
    } catch (e) {
        res.send({data:"something went wrong"})
    }
})

//connect to DB
mongoose.connect(
    process.env["DB_CONNECTION"],
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => {
        console.log("connected to db")
    });
app.listen(5000);