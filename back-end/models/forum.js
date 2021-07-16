

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema({
	name: {
		type: String,
		maxlength: 100,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		maxlength: 3000,
	},
	comments: [
		{
			author: {
				type: String,
				required: true,
			},
			msg: {
				type: String,
				required:true,
			},
		}
	],
	tags: [
		{
			type: String
		},
	],
	// https://masteringjs.io/tutorials/mongoose/timestamps source
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } });

module.exports = mongoose.model("Forum", forumSchema);