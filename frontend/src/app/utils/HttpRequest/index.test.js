import axios from "axios";
import { cleanup } from "@testing-library/react";
import { HttpRequest } from ".";

jest.mock("axios");
afterEach(cleanup);

describe("Test util Http request", () => {
	it("should response with get some data", async () => {
		await axios.get.mockResolvedValue({
			status: 200,
			data: [],
		});

		const response = await HttpRequest.get();

		expect(response.status).toEqual(200);
		expect(response.data).toEqual([]);
	});

	it("should response with post data", async () => {
		await axios.post.mockResolvedValue({
			status: 201,
			data: [],
		});

		const response = await HttpRequest.post();

		expect(response.status).toEqual(201);
		expect(response.data).toEqual([]);
	});

	it("should response with put some data", async () => {
		await axios.put.mockResolvedValue({
			status: 200,
			data: [],
		});

		const response = await HttpRequest.put();

		expect(response.status).toEqual(200);
		expect(response.data).toEqual([]);
	});

	it("should response with delete some data", async () => {
		await axios.delete.mockResolvedValue({
			status: 200,
			data: [],
		});

		const response = await HttpRequest.delete();

		expect(response.status).toEqual(200);
		expect(response.data).toEqual([]);
	});
});
