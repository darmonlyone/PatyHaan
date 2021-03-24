import app from "../app";
import { expect } from "chai";
import request from "supertest";
import basicSetup from "./helper/basicSetup";
import User from "../models/User";
import Party from "../models/Party";
import Hasher from "../utils/Hasher";
import { uid } from "rand-token";
import PartyStatus from "../models/enums/PartyStatus";
import { mockParties } from "./mock/parties";

describe("Test party endpoint", () => {
	const mockUser = {
		_id: "000000000000000000000001",
		email: "test@test.com",
		password: Hasher.hashPassword("123456"),
		token: uid(16),
	};
	const TOKEN = mockUser.token;

	describe("GET: / get", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should get parties with status", (done) => {
			request(app)
				.get("/api/parties/")
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.body.length).to.equal(4);
					expect(res.body.some((p) => p.status === PartyStatus.FULL)).to.true;
					expect(res.body.some((p) => p.status === PartyStatus.NONE)).to.true;
					expect(res.body.some((p) => p.status === PartyStatus.OWNED)).to.true;
					expect(res.body.some((p) => p.status === PartyStatus.JOINED)).to.true;
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});

		it("should get parties 401 unauthorize token", (done) => {
			request(app)
				.get("/api/parties/")
				.set("Authorization", `Bearer as${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(401);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("GET: /own get owned parties", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should get parties by owner", (done) => {
			request(app)
				.get("/api/parties/own")
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.body.length).to.equal(1);
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("POST: / create", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should create party", (done) => {
			const data = { name: "test", amount: 90 };
			request(app)
				.post("/api/parties/")
				.set("Authorization", `Bearer ${TOKEN}`)
				.send(data)
				.then((res) => {
					expect(res.body).to.include(data);
					expect(res.statusCode).to.equal(201);
					done();
				})
				.catch((err) => done(err));
		});

		it("should create party fail amount should not exceed 100", (done) => {
			const data = { name: "test", amount: 101 };
			request(app)
				.post("/api/parties/")
				.set("Authorization", `Bearer ${TOKEN}`)
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});

		it("should create party fail amount should not less than or equal 0", (done) => {
			const data = { name: "test", amount: 0 };
			request(app)
				.post("/api/parties/")
				.set("Authorization", `Bearer ${TOKEN}`)
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("DELETE: /:id detete by id", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should delete party 400 User are not own this party", (done) => {
			const id = "000000000000000000000011";
			request(app)
				.delete(`/api/parties/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});

		it("should delete party", (done) => {
			const id = "000000000000000000000014";
			request(app)
				.delete(`/api/parties/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("PUT: /:id edit by id", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should create party User are not own this party", (done) => {
			const id = "000000000000000000000014";
			const data = { name: "tester", amount: 2 };
			request(app)
				.put(`/api/parties/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("PUT: /join/:id join party by id", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should join party", (done) => {
			const id = "000000000000000000000011";
			request(app)
				.put(`/api/parties/join/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});

		it("should join party 400 join to full party", (done) => {
			const id = "000000000000000000000012";
			request(app)
				.put(`/api/parties/join/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});

		it("should join party 400 join to joined party", (done) => {
			const id = "000000000000000000000013";
			request(app)
				.put(`/api/parties/join/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});
		it("should join party 400 join to owned party", (done) => {
			const id = "000000000000000000000014";
			request(app)
				.put(`/api/parties/join/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("PUT: /unjoin/:id unjoin party by id", () => {
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then((res) => done())
				.catch((err) => done(err));
		});
		beforeEach((done) => {
			Party.insertMany(mockParties)
				.then((res) => done())
				.catch((err) => done(err));
		});

		it("should unjoin party", (done) => {
			const id = "000000000000000000000013";
			request(app)
				.put(`/api/parties/unjoin/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});

		it("should join party 400 not joined party", (done) => {
			const id = "000000000000000000000012";
			request(app)
				.put(`/api/parties/unjoin/${id}`)
				.set("Authorization", `Bearer ${TOKEN}`)
				.then((res) => {
					expect(res.statusCode).to.equal(400);
					done();
				})
				.catch((err) => done(err));
		});

	});
});
