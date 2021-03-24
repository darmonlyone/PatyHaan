import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import InputField from ".";

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

it("should renders InputField", () => {
	act(() => {
		render(<InputField />, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

    act(() => {
		render(<InputField title={"test"}/>, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

    act(() => {
		render(<InputField title={"test2"} className="w-full bg-gray-100" />, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

    act(() => {
		render(<InputField title={"test2"} type={"password"} />, container);
	});
	expect(pretty(container.innerHTML)).toMatchSnapshot();

});
