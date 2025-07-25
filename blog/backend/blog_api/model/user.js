const { type } = require('express/lib/response')
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, "Please Enter First Name"]
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, "Please Enter Last Name"]
    },
    contact: {
        type: String,
        required: [true, "Please Enter Contact"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please Enter Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        trim: true,
    },
})

let USER = mongoose.model('user', userSchema)
module.exports = USER