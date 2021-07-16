const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actors = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other", null]
    },
    dateOfBirth: Date,
})

module.exports = actors;