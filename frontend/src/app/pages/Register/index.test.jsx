import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Register from ".";

it("should render Register page with default value", async () => {
	const { asFragment,  } = render(
		<Router>
			<Register />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});
