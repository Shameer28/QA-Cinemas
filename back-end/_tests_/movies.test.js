
// Setup for all tests

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);

const expect = chai.expect

describe("Forum Route Test", ()=> {
	let api

	const example = {
		"__v": 0,
		"_id": "60e6c3121d351564285c32fb",
		"actors": [
		{
			"_id": "60e6c3121d351564285c32fc",
			"name": "Ryan Reynolds",
		},
		{
			"_id": "60e6c3121d351564285c32fd",
			"name": "Justice Smith",
		},
		],
		"director": "Rob Letterman",
		"genre": "Family Adventure",
		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH4lP8VXcON1P0Cm9e4Tnj_MSTNwReOUQ0A&usqp=CAU",
		"plot": "After the demise of his father, Tim travels to Ryme city where he runs into his father's Pokemon partner, Pikachu. They team up and try to work on the case left unfinished by Tim's father.",
		"runtime": "1h 45m",
		"showTimes": [
		"1627200918",
		],
		"title": "Detective Pikachu",
	}


	beforeEach( ()=> {
		api = chai.request(app);
	})

	it("GetAll", (done)=> {
		api.get("/movies/getAll").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);

			done();
		})
	});

	it("Get", (done)=> {
		api.get("/movies/get/" + "60e6c3121d351564285c32fb").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);
			expect(resp.body).to.eql(example);
			
			done();
		})
	})

	
	it("Get Error", (done)=> {
		api.get("/movies/get/" + "60e6c351564285c32fb").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(404);
			
			done();
		})
	});


	

	

	it("Create Error", (done)=> {
		api.post("/movies/create").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(404);
			
			done();
		})
	});
	
	it("Delete Error", (done)=> {
		api.delete("/movies/delete/" + "60e2342564285c32fb").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(503);
			
			done();
		})
	});


});