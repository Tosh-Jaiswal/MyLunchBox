const mongoose = require("mongoose")
const validator = require('validator')

const Bhukkad = mongoose.model('Bhukkad', {
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new error ('Please enter a valid mobile number.')
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new error('password error')
            }
        }
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type : String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },

    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})

//const Bhukkad = mongoose.model('Bhukkad', bhukkadSchema)
module.exports = Bhukkad