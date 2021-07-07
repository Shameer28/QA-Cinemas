const express = require("express");
const router = express.Router();


const RatingsDB = require("../models/ratings.js");


router.post("/create", async (req, res) => {
	const data = req.body;

	try {
		const rating = new RatingsDB(data); 
	
		await film.save();
	
		res.send(film);
	} catch (e) {
		res.status(404).send(e.name + ': ' + e.message);
	}

});


router.get("/getAll", async (req, res) => {
	// GET ALL RATINGS
	const limit = 10;
});

router.get("/getAll/:filmId", async( req, res) => {
	// GET ALL based on film
});



module.exports = router;