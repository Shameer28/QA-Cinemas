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
	plot: "Some info"
}

router.get("/getAll", async (req, res) => {
	const data = []
	await FilmDB.find({ "title": true }, (err, films) => {
		if (err) {
			res.status(505).send(err.message);
		} else {
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

module.exports = router;