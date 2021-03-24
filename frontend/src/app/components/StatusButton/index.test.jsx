import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import StatusButton from ".";

it("should render StatusButton with default value", async () => {
	const { asFragment } = render(
		<Router>
			<StatusButton />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});

it("should render StatusButton with status joined", async () => {
	const { asFragment } = render(
		<Router>
			<StatusButton status="joined" />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});

it("should render StatusButton with status full", async () => {
	const { asFragment } = render(
		<Router>
			<StatusButton status="full" />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});

it("should render StatusButton with default owned", async () => {
	const { asFragment } = render(
		<Router>
			<StatusButton status="owned" />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});
