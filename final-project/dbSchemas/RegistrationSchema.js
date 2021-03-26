const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({

    name:{
        type:String,
        required: true
    },email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
module.exports = mongoose.model('Registration',RegistrationSchema);