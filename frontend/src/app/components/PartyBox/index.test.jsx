import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PartyBox from ".";

it("should render PartyBox with default value", async () => {
	const { asFragment } = render(
		<Router>
			<PartyBox />
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
});

it("should render PartyBox with some value", async () => {
	const { asFragment, getByTestId,getByText } = render(
		<Router>
			<PartyBox id="2" imageUrl="test url" title="test" joined="2" amount="10"/>
		</Router>
	);

	expect(asFragment()).toMatchSnapshot();
	expect(getByTestId("image").src).toEqual("http://localhost/test%20url")
	expect(getByText("test")).toBeDefined()
	expect(getByText("2/10")).toBeDefined()

});

it("should render PartyBox with status joined", async () => {
	const { asFragment,getByText } = render(
		<Router>
			<PartyBox id="2" imageUrl="test url" title="test" joined="2" amount="10" status="joined"/>
		</Router>
	);
	
	expect(asFragment()).toMatchSnapshot();
	expect(getByText("ออกปาร์ตี้")).toBeDefined()
});

it("should render PartyBox with status full", async () => {
	const { asFragment,getByText } = render(
		<Router>
			<PartyBox id="2" imageUrl="test url" title="test" joined="2" amount="10" status="full"/>
		</Router>
	);
	
	expect(asFragment()).toMatchSnapshot();
	expect(getByText("เต็ม")).toBeDefined()
});

it("should render PartyBox with status owned", async () => {
	const { asFragment,getByText } = render(
		<Router>
			<PartyBox id="2" imageUrl="test url" title="test" joined="2" amount="10" status="owned"/>
		</Router>
	);
	
	expect(asFragment()).toMatchSnapshot();
	expect(getByText("ลบปาร์ตี้")).toBeDefined()
});


it("should render PartyBox with status none", async () => {
	const { asFragment,getByText } = render(
		<Router>
			<PartyBox id="2" imageUrl="test url" title="test" joined="2" amount="10" status="none"/>
		</Router>
	);
	
	expect(asFragment()).toMatchSnapshot();
	expect(getByText("เข้าร่วม")).toBeDefined()
});


