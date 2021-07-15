const express = require("express");
const router = express.Router();


const RatingsDB = require("../models/ratings");
const FilmDB = require("../models/films");
const ForumDB = require("../models/forum");


const maxCount = 2;

router.get("/:desc", (req, res, next)=> {	
	const search = req.params.desc;

	const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
	const searchRgx = rgx(search);


	console.log(search);
	// if (desc === "asdasdasd sdfsdf") {
		let response = [
		];

		let idLookup = {}

		let count = 0



		const findFilms = async() => {
			const films = await FilmDB.find({
				$or: [
					{ title: { $regex: searchRgx, $options: "i" }},
					{ plot: { $regex: searchRgx, $options: "i" }},
				]
			}).catch(next);

			films.forEach( (film) => {
				response.push({
					type: "Movie",
					id: film._id,
					data: {
						image: film.image,
						title: film.title,
					},
				});
			});
			count++
		}

		const findThreads = async() => {
			const threads = await ForumDB.find({
				$or: [
					{ name: { $regex: searchRgx, $options: "i" }},
					{ body: { $regex: searchRgx, $options: "i" }},
					{ author: { $regex: searchRgx, $options: "i" }},
				]
			}).catch(  ()=> {
				count++;	
			});

			threads.forEach( (thread) => {
				response.push({
					type: "Thread",
					id: thread._id,
					data: {
						name: thread.name,
						author: thread.author
					},
				});
			});
			count++
		}


		let responseWaiter;
		
		responseWaiter = ()=> {
			if (count >= maxCount) {
				res.send(response);
			} else{
				setTimeout(responseWaiter, 100);
			}
		};

		findFilms();
		findThreads();
		// res.send(response);


		responseWaiter();

		return;
});

module.exports = router;