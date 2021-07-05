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


router.get("/getAll", (req, res) => {
	res.send([tempData]);
});

router.get("/get/:id", (req, res) => {
	const id = req.params.id;

	res.send(tempData);
});

module.exports = router;