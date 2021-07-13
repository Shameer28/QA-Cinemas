
const express = require("express");

const router = express.Router();

const ForumDB = require("../models/forum.js");

router.post("/create", async (req, res) => {

	const data = req.body;

	console.log(data)

	try {
		const post = new ForumDB(data);

		await post.save();

		res.send(post);
	}
	catch(e) {
		console.log(e);
		res.status(404).send(e.name + ': ' + e.message);
	}

});

router.get("/getAll", async (req, res) => {
	await ForumDB.find({}, { name: true, updatedAt: true, author: true, tags: true,}, (err, forums) => {
		if (err) {
			res.status(504).send(err.message);
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

router.patch("/comment/add/:id", async( req, res) => {
	
	const data = {
		author: req.body.author,
		msg: req.body.msg
	}
	
	try {
		// get rid of email address?
		const forum = await ForumDB.findById(req.params.id);

		forum.comments.push(data);

		forum.save();

		res.send(forum);

	} catch(err) { 
		console.log(err)
		res.status(500).send(err.message);
	}
});

router.patch("/comment/remove/:id", async( req, res) => {
	
	const data = {
		author: req.body.author,
		msg: req.body.msg
	}
	

	const jData = JSON.stringify(data)
	
	try {
		// get rid of email address?
		const forum = await ForumDB.findById(req.params.id);

		const i = -1;
		forum.comments.map( (comment, index) => {
			// Hacky fix
			if (JSON.stringify(comment) == jData) {
				i = index;
			}
		})
		if (i === -1) {
			return res.status(500).send("No comment found")
		}

		forum.pop(i)

		res.send(forum);

	} catch(err) { 
		console.log(err)
		res.status(500).send(err.message);
	}
});


router.delete("/delete/:id", async (req, res)=> {
	const id = req.params.id;

	try {
		const success = await ForumDB.deleteOne({_id: id});

		console.log(success);
		res.send(success.n === 1)
	}
	catch (e) {
		res.status(503).send("Invalid id")
	}
});

module.exports = router;