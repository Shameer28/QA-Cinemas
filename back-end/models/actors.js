const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actors = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1
    },
    surname: {
        type: String,
        required: true,
        minlength: 1
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other", null]
    },
    dateOfBirth: Date,
    movies: [{
        type: String
    }]
})

module.exports = actors;