import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from ".";

jest.mock("app/hooks/useMenuHandle", () => {
	return () => {
		return {
			showMenu: false,
			onMenuClick: jest.fn(),
			onLogoutClick: jest.fn(),
		};
	};
});

it("should render Nav with default value", async () => {
	const { asFragment, getByText } = render(
		<Router>
			<Nav />
		</Router>
	);

	expect(getByText("ปาร์ตี้ทั้งหมด")).toBeDefined();
	expect(asFragment()).toMatchSnapshot();
});
