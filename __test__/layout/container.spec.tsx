import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Container } from "../../src";

describe("Container", () => {
	it("renders correctly", () => {
		const { container } = render(<Container tag="main" />);

		expect(container.firstChild).toHaveClass("container");
		expect(container.firstChild).toMatchSnapshot();
	});
});
