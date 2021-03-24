import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import CreatePartyModal from ".";

const onCloseHandle = jest.fn();

jest.mock("app/hooks/useCreatePartyHandle", () => {
	return () => {
		return {
			partyName: "test",
			amount: 5,
			imageUrl: "test url",
			onPartyNameChange: jest.fn(),
			onAmountChange: jest.fn(),
			onImageUrlChange: jest.fn(),
			onCreatePartySubmit: jest.fn(),
		};
	};
});

it("should render CreatePartyModal with changed state value", async () => {
	const { asFragment, getByTestId, getByText } = render(
		<Router>
			<CreatePartyModal onCloseHandle={onCloseHandle} />
		</Router>
	);

	expect(getByTestId("partyname").value).toEqual("test");
	expect(getByTestId("amount").value).toEqual("5");
	expect(getByTestId("imageurl").value).toEqual("test url");
	expect(getByText("ชื่อปาร์ตี้")).toBeDefined();
	expect(asFragment()).toMatchSnapshot();

});
