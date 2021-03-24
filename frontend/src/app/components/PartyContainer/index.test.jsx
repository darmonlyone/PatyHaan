import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PartyContainer from ".";

jest.mock("axios");

jest.mock("app/hooks/useFetchParties", () => {
	return () => {
		return {
			parties: [
				{
					_id: "60434993f1f8013beab9f687",
					name: "qwqweqweq",
					amount: 4,
					userIdList: ["604344f69d4a6e394d1de227", "60435ffbf1f8013beab9f699"],
					imageUrl: "",
					createAt: "2021-03-06T09:21:23.189Z",
					ownerId: "60428eb421c7a75cb6832c5c",
					status: "none",
				},
			],
		};
	};
});

it("should render PartyContainer with default value", async () => {
	const { asFragment } = render(
		<Router>
			<PartyContainer />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});
