const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);

const expect = chai.expect

describe("Search Route Test", ()=> {
	beforeEach( ()=> {
		api = chai.request(app);
	});

	it("Search", (done)=> {
		api.get("/search/d").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);

			done();
		})
	});
});