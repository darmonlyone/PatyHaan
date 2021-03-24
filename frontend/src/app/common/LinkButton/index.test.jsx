import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import {
	BrowserRouter as Router,
} from "react-router-dom";

import LinkButton from ".";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("should renders LinkButton", () => {
	act(() => {
		render(<Router><LinkButton >test</LinkButton></Router>, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

	act(() => {
		render(<Router><LinkButton className="bg-red-500">test</LinkButton></Router>, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

	act(() => {
		render(<Router><LinkButton to="/">test</LinkButton></Router>, container);
	});

	expect(pretty(container.innerHTML)).toMatchSnapshot();

	act(() => {
		render(<Router><LinkButton disabled>test</LinkButton></Router>, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();
});
