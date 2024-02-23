const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    houseNumber:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    gender:String,
    status:String,
    typesOfMembership:String
})


const UserModel = mongoose.model("members", UserSchema)
module.exports= UserModel