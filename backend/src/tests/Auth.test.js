import app from "../app";
import { expect } from "chai";
import request from "supertest";
import basicSetup from "./helper/basicSetup";
import User from "../models/User";
import Hasher from "../utils/Hasher";
import { uid } from "rand-token";

describe("Test auth endpoint", () => {

	describe("POST: / login", () => {
		const mockUser = { email: "test@test.com", password: Hasher.hashPassword("123456") };

		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then(() => done())
				.catch((err) => done(err));
		});

		it("should login pass", (done) => {
			const loginMock = { email: "test@test.com", password: "123456" };
			request(app)
				.post("/api/auth/login/")
				.send(loginMock)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});

		it("should login fail with incorrect password 401", (done) => {
			const loginMock = { email: "test@test.com", password: "654321" };
			request(app)
				.post("/api/auth/login/")
				.send(loginMock)
				.then((res) => {
					expect(res.statusCode).to.equal(401);
					expect(res.body).to.be.an("object");
					done();
				})
				.catch((err) => done(err));
		});
	});

	describe("POST: / logout", () => {
		const mockUser = { email: "test@test.com", password: Hasher.hashPassword("123456"), token: uid(16) };
		const TOKEN = mockUser.token

		basicSetup();
		beforeEach((done) => {
			new User(mockUser)
				.save()
				.then(() => done())
				.catch((err) => done(err));
			
		});

		it("should logout pass", (done) => {
			const loginMock = { email: "test@test.com", password: "123456" };
			request(app)
				.post("/api/auth/logout/").set('Authorization', `Bearer ${TOKEN}`)
				.send(loginMock)
				.then((res) => {
					expect(res.statusCode).to.equal(200);
					done();
				})
				.catch((err) => done(err));
		});
	});
});
