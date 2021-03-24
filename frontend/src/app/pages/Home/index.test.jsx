import React from "react";
import axios from "axios";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from ".";

jest.mock("axios");

beforeEach(() => {
	axios.get.mockResolvedValue({
		data: [],
	});
});

afterEach(cleanup);

it("should render Home page with default value", async () => {
	const { asFragment } = render(
		<Router>
			<Home />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});
