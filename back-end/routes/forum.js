
const express = require("express");

const router = express.Router();

const ForumDB = require("../models/forum.js");

router.post("/create", async (req, res) => {

	const data = req.body;

	try {
		const post = new ForumDB(data);

		await post.save();

		res.send(post);
	}
	catch(e) {
		res.status(404).send(e.name + ': ' + e.message);
	}

});

router.get("/getAll", async (req, res) => {
	await ForumDB.find({}, { name: true, updatedAt: true}, (err, forums) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
			res.send(forums);
		}
	})
});

router.get("/get/:id", async (req, res) => {



	try {
		// get rid of email address?
		const forum = await ForumDB.findById(req.params.id);
		res.send(forum);
	} catch (e) {
		console.log(e);
		res.status(404).send("No Forum found with that id");
	}
});


// patch request to add comments

module.exports = router;