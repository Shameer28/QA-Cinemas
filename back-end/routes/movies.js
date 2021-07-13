const express = require("express");

const router = express.Router();

/*
	Movies 

	{
		title: "Detective Pikachu",
		image: "icon"
		actors: [

		],
		director: "Rob Letterman"
		showingTimes : [

		],
		plot: "Some info"
	}

*/

const FilmDB = require("./../models/films")

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
	plot: "Some info",
	releaseDate: 100,
}

router.get("/getAll", async (req, res) => {
	await FilmDB.find({}, { "title": true, "image": true, "releaseDate": true}, (err, films) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
			// res.send([tempData]);

			res.send(films);
		}
	});
}); 

router.get("/get/:id", async (req, res) => {
	try {
		const film = await FilmDB.findById(req.params.id);
		res.send(film);

	} catch {
		res.status(404).send("No film found");
	}
})

router.post("/create", async (req, res) => {
	// TODO: Change this so that we deconstruct the object instead of directly passing it to the db
	const data = req.body;

	try {
		const film = new FilmDB(data); 
	
		await film.save();
	
		res.send(film);
	} catch (e) {
		res.status(404).send(e.name + ': ' + e.message);
	}
});

router.delete("/delete/:id", async (req, res)=> {
	const id = req.params.id;

	try {
		const success = await FilmDB.deleteOne({_id: id});

		res.send(success.n === 1)
	}
	catch (e) {
		res.status(503).send("Invalid id")
	}
});

module.exports = router;