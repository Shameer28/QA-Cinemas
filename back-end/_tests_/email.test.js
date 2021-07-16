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

	it("Email Working", (done) => {
		api.post("/email/send").set('content-type', 'application/json')
		
		.send({Email: "noreply@qa.com", TextArea: "Integration Test", FirstName: "Test", LastName: "Test"}).end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);
			expect(resp.body.status).to.equal("success");

			done();
		});
	});

	it("Email Error", (done) => {
		api.post("/email/send").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(500);

			done();
		});
	});

	it("Email Error with email", (done) => {
		api.post("/email/send").set('content-type', 'application/json')
		
		.send({Email: ""}).end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(500);

			done();
		});
	});

})