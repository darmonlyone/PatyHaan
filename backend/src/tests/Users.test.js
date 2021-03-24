import app from "../app";
import { expect } from "chai";
import request from "supertest";
import basicSetup from "./helper/basicSetup";
import Hasher from "../utils/Hasher";
import User from "../models/User";

describe("Test user endpoint", () => {
	describe("POST: / route to insert user", () => {
		basicSetup();

		it("should post data", (done) => {
			let data = { email: "test@test.com", password: "123456" };
			request(app)
				.post("/api/users/")
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(201);
					expect(res.body.email).to.equal(data.email);
					expect(
						Hasher.isHashCorrect(data.password, res.body.password)
					).to.be.equal(true);
					done();
				})
				.catch((err) => done(err));
		});

		it("should post error by data without password", (done) => {
			let data = { email: "test@test.com" };
			request(app)
				.post("/api/users/")
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(500);
					expect(res.body).to.be.an("object");
					done();
				})
				.catch((err) => done(err));
		});

		it("should post error by data without email", (done) => {
			let data = { password: "123456" };
			request(app)
				.post("/api/users/")
				.send(data)
				.then((res) => {
					expect(res.statusCode).to.equal(500);
					expect(res.body).to.be.an("object");
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("GET: / route to get user", () => {
		const mockUser = { email: "test@test.com", password: "123456" };
		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then(() => done())
				.catch((err) => done(err));
		});

		it("should get data", (done) => {
			request(app)
				.get("/api/users/")
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					expect(res.body[0]).to.include(mockUser);
					done();
				})
				.catch((err) => done(err));
		});
	});
});
