  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actors = require("./actors");


const tempData = {
	_id: "123123123123123",
	title: "Detective Pikachu",
	image: "icon",
	actors: [
		"Ryan Reynolds",
	],
	director: "Rob Letterman",
	showingTimes : [

	],
	plot: "Some info"
}

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
	}]
});

module.exports = mongoose.model("Films", filmSchema);