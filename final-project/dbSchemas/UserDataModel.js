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
    userData: {
        type: Object,
        required: true
    },

})
module.exports = mongoose.model('UserData',UserData);