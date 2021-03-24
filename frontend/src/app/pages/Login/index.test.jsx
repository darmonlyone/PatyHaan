import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from ".";

it("should render Login page with default value", async () => {
	const { asFragment,  } = render(
		<Router>
			<Login />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});
