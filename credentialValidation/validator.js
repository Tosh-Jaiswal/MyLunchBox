const Validator = require("fastest-validator")
const v = new Validator();
const pv = require('./passwordV')
const validationSchema = {
    firstName: {
        type: "string",
        min: 2,
        messages: {
            string: "Please check your firstname",
            stringMin: "Your firstname is too short"
        },
        required:true,
        trim:true
    },

    phoneNumber: {
        type: "number",
        required: true,
        trim: true,
        min: 10,
        messages: {
            string: "Please check your mobileNumber",
            stringMin: "Your mobileNumber is too short"
        }
    },

    password: {
        type: "string",
        required: true,
        min: 7,
        trim: true,
        messages: {
            string: "Please check password criteria",
            stringMin: "Your password is too short"
        }
    },

    lastName: {
        type: "string",
        min: 3,
        messages: {
            string: "Please check your lastname",
            stringMin: "Your firstname is too short"
        },
        required: true,
        trim: true
    },

    email: {
        type : "email",
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },

    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
    
}
console.log(v.validate({ firstname: "John", lastname: "tho" }, validationSchema ));