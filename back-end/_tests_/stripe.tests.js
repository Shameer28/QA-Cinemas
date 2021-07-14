const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);

const expect = chai.expect

describe("Stripe Route Test", ()=> {
	beforeEach( ()=> {
		api = chai.request(app);
	});

	it("Stripe Error", (done)=> {
		api.post("/stripe/request").end( (err, resp) => {
			expect(err).to.be.null;
			expect(resp).to.have.status(500);

			done();
		})
	});
});