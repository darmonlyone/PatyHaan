import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PartyPlusButton from ".";

const onClick = jest.fn()
it("should render PartyPlusButton with default value", async () => {
	const { asFragment } = render(
		<Router>
			<PartyPlusButton onClick={onClick } />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});

it("should render PartyPlusButton with handle click", async () => {
	const { getByTestId } = render(
		<Router>
			<PartyPlusButton onClick={onClick} />
		</Router>
	);
	
	const plusButton = getByTestId("plusbutton")
	fireEvent.click(plusButton)
	expect(plusButton).toBeDefined()
	expect(onClick).toBeCalled()
});