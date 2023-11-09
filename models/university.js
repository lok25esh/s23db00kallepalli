const mongoose = require("mongoose")
const universitySchema = mongoose.Schema({
unvName: String,
unvSid: Number,
unvFee: Number
})
module.exports = mongoose.model("university",
universitySchema)