const mongoose = require("mongoose")
const validator = require("validator")

const Aunty = mongoose.model('Aunty', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
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
                throw new Error('Please try another password')
            }
        }
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if (!value.toLowerCase()===password.value){
                throw new Error ('Password does not match!')
            }
        }
    },
    mobileNumber: {
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new error ('Please enter a valid mobile number.')
            }
        }
    },
    idproof:{
        type: String,
       // required: true,
        trim: true,
        validate(value) {
            if(!validator.isIdentityCard(value)){
                throw new error ('Please enter a valid idproof.')
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        trim: true
        }
})

//const Aunty = mongoose.model('Aunty', auntySchema)
module.exports = Aunty
