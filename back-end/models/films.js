  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actors = require("./actors");

// Validation of the Schema
const filmSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
	image: {
		type: String,
		require: true,
	},
	runtime: {
		type: String,
		required: true,
	},
	plot: {
		type: String,
        required: true,
    },
	director: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		require: true,
	},
	actors: [actors],
	showTimes: [{
		type: String,
	}],
	releaseData: {
		type: Number,
		require: true,
	}
});

module.exports = mongoose.model("Films", filmSchema);