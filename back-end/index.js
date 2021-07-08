const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const port = 3000;

const options = {
	useNewUrlParser: true, 
	useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost/films", options).then( () =>{
	const app = express();
	app.use(express.json());
	app.use(cors());

	const server = app.listen(port, () => {
		console.log(`Server started successfully on port number ${server.address().port}`);
	});

	// this could do with some improvement
	app.use("/movies", require("./routes/movies") );
	app.use("/ratings", require("./routes/rating") );
});
