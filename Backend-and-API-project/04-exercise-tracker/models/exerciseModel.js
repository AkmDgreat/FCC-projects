const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: String
})

const exerciseModel = mongoose.model("Exercise", exerciseSchema)

module.exports = exerciseModel