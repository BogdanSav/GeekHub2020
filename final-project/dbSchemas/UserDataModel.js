

const mongoose = require('mongoose');

const UserData = mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    month:{
        type:Number,
        required: true
    },
    day:{
        type:Number,
        required: true
    },
    actions:{
        type:[],
        required:true
    }


})
module.exports = mongoose.model('UserData',UserData);