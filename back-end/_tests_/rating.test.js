const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);

const expect = chai.expect

describe("Ratings Route Test", ()=> {
	let api
	beforeEach( ()=> {
		api = chai.request(app);
	})

	it("GetAll", (done)=> {
		api.get("/ratings/getAll").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);

			done();
			console.log("Ahoy")
		});
	}).timeout(5000);

	it("GetAllByFilmID", (done)=> {
		api.get("/ratings/getAll/60e6c3121d351564285c32fb").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);

			done();
		});
	});

	it("Delete Error", (done) => {
		api.delete("/ratings/delete/asdsadasda").end( (err,resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(503);
			done();
		})
	});


	it("Create Error", (done) => {
		api.post("/ratings/create").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(404);
			done();
		})
	});


});