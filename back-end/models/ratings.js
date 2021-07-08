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
	// https://masteringjs.io/tutorials/mongoose/timestamps source
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } });

module.exports = mongoose.model("Reviews", reviews);