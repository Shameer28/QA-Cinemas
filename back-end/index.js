const express = require("express");
const mongoose = require("mongoose");

const port = 3000;




const options = {
	useNewUrlParser: true, 
	useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost/films", options).then( () =>{
	const app = express();
	app.use(express.json());

	const server = app.listen(port, () => {
		console.log(`Server started successfully on port number ${server.address().port}`);
	});

	app.use("/movies", require("./routes/movies") );

})

