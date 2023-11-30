const mongoose = require("mongoose")
const universitySchema = mongoose.Schema({

unvName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    
    validate: {
        validator: function (v) {
            return /^[a-zA-Z0-9_]+$/.test(v); 
        },
        message: props => `${props.value} is not a valid University Name! Use only letters, numbers, and underscores.`,
    },
},
unvSid: {
    type: Number,
    validate: {
        validator: function(v) {
            return v >= 0; 
        },
        message: props => `${props.value} is not a valid id! ID must be a non-negative number.`,
    },
},
unvFee: {
    type: Number,
    validate: {
        validator: function(v) {
            return v >= 0; 
        },
        message: props => `${props.value} is not a valid Fee! Fee must be a non-negative number.`,
    },
},
})
module.exports = mongoose.model("university", universitySchema)
