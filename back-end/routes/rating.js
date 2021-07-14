const express = require("express");
const router = express.Router();


const RatingsDB = require("../models/ratings");
const FilmDB = require("../models/films");
// This is the only object that we can network out, 
// DONT SEND ANY OTHER DB OBJECT
const ratingsReader = {
	"name": true,
	"rating": true,
	"msg": true,
	"filmID": true,
	"createdAt": true,
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
	const limit = 10;
	
	await RatingsDB.find({}, ratingsReader).sort({createdAt: -1}).limit(limit).exec( async(err, ratings) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
			
			let filmIdToName = {}
			let newReviews = []
			
	 		for (let x in ratings) {
				// hacky fix
				let rating = JSON.parse(JSON.stringify( ratings[x]))
				
				const id = rating.filmID;
	
				if (filmIdToName[id] !== undefined) {
					rating.filmName = filmIdToName[id];
				}
				else {
					const film = await FilmDB.findById(id);	
					filmIdToName[id] = film.title;
					rating.filmName = film.title;
				}
				newReviews[x] = rating;
			}

			res.send(newReviews);
		}
	});
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

router.delete("/delete/:id", async (req, res)=> {
	const id = req.params.id;

	try {
		const success = await RatingsDB.deleteOne({_id: id});
		res.send(success.n === 1)
	}
	catch (e) {
		res.status(503).send("Invalid id")
	}
});

module.exports = router;