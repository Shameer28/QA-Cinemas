const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviews = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	rating: {
		type: Number,
		// limit it to 1-5
	},
	msg: {
		type: String
		// max size
	},
	filmID: {
		type: Schema.Types.ObjectId
	}
});

module.exports = mongoose.model("Reviews", reviews);