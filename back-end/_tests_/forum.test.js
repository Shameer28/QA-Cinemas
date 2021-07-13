
// Setup for all tests

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);

const expect = chai.expect

describe("Forum Route Test", ()=> {
	let api

	beforeEach( ()=> {
		api = chai.request(app);
	})


	const example = {
		"__v": 7,
		"_id": "60e713146b645864d4b48691",
		"author": "Oliver",
		"body": "I have always liked movies Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quaerat consequatur itaque accusamus cum possimus id? Labore aspernatur ipsa error optio itaque cupiditate. Hic, animi voluptatibus distinctio suscipit ipsam quae.",
		"comments": [
			{
				"_id": "60e829b41d96f27ac8fd964b",
				"author": "Dillon",
				"msg": "This was a fun movie",
			},
			{
				"_id": "60e82a175022994eb4d23549",
				"author": "Oliver",
				"msg": "It really was alot of fun",
			},
			{
				"_id": "60e82a715022994eb4d2354d",
				"author": "Dillon",
				"msg": "yes",
			},
			{
				"_id": "60e82c2f84f9495abc17bb90",
				"author": "Dillon",
				"msg": "yes 1",
			},
			{
				"_id": "60e82c51238f0e2fd8dccd26",
				"author": "Dillon",
				"msg": "yes 2",
			},
			{
				"_id": "60e82c60238f0e2fd8dccd2a",
				"author": "Oliver",
				"msg": "Wow",
			},
			{
				"_id": "60e82c75238f0e2fd8dccd2e",
				"author": "Dillon",
				"msg": "coooool",
			}
		],
		"createdAt": "1970-01-19T19:35:56.436Z",
		"name": "This is a thread about something to do with movies",
		"tags": [
			"Movies",
			"Oliver"
		],
		"updatedAt": "1970-01-19T19:37:08.469Z"
	}

	it("Get All", (done) => {
		api.get("/forums/getAll").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);
			done();
		})
	});
	
	it("Get", (done) => {
		api.get("/forums/get/" + "60e713146b645864d4b48691").end( (err, resp)=> {
			expect(err).to.be.null;
			expect(resp).to.have.status(200);
			expect(resp.body).to.eql(example);
			
			done();
		})
	});

	it("Get Error", (done) => {
		api.get("/forums/get/" + "60e713146b645864").end( (err, resp)=> {
			expect(resp).to.have.status(404);			
			done();
		})
	});
	
		const create = {
			name: "Wow this was nice",
			author: "Oliver",
			body: "This is a forum post",
		}

	it("Create", (done)=> {
		api.post("/forums/create").set('content-type', 'application/json')
		.send(create).end( (err, resp)=> {
			// console.log(resp, err)
			expect(resp).to.have.status(200)
			done()
		})
	});


	it("Create Error", (done) => {

		api.post("/forums/create").end( (err, resp)=> {
			expect(resp).to.have.status(404)
			done()
		})
	});


})


