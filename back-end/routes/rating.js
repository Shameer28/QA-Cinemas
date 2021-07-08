const express = require("express");
const router = express.Router();


const RatingsDB = require("../models/ratings.js");

// This is the only object that we can network out, 
// DONT SEND ANY OTHER DB OBJECT
const ratingsReader = {
	"name": true,
	"rating": true,
	"msg": true,
	"filmID": true,
}

router.post("/create", async (req, res) => {
	const data = req.body;

	// validate all the data;
	try {
		const rating = new RatingsDB(data); 
	
		await rating.save();
	
		res.send(rating);
	} catch (e) {
		res.status(404).send(e.name + ': ' + e.message);
	}

});


router.get("/getAll", async (req, res) => {
	// GET ALL RATINGS

	await RatingsDB.find({}, ratingsReader, (err, ratings) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
			res.send(ratings);
		}
	});


	const limit = 10;
});

router.get("/getAll/:filmId", async( req, res) => {
	// GET ALL based on film

	const filmID = req.params.filmId;

	await RatingsDB.find({ filmID: filmID}, ratingsReader, (err, ratings) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
			res.send(ratings);
		}
	});

});



module.exports = router;