const express = require("express");
const {resolve} = require("path");
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
            "email":req.body.Email,
        })
        if(!registerCheck){
        const register = new Auth({
            name: req.body.Name,
            email: req.body.Email,
            password: bcrypt.hashSync(req.body.Password, saltRounds),
        })
        const newUserData = new UserData({
            name: req.body.Name,
            email: req.body.Email,
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
        const email = await Auth.exists({email: req.body.Email});
        const password = await Auth.findOne({email: req.body.Email}, "password");
        if (email && bcrypt.compareSync(req.body.Password, password.password)) {
            res.send({message: true});
        }
        else res.send({message: false});
    } catch (err) {
        console.log(err);
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
        console.log("getData", usersData);
        res.send({data: usersData[0].actions})

    } catch (err) {
        res.send({data: "nothing to see here"})
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
        console.log(err);
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
        console.log("counter", countOfActions);
    } catch (e) {
        console.log(e);
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