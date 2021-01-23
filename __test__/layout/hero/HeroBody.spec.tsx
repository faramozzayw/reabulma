import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HeroBody } from "../../../src";

describe("HeroBody", () => {
	it("renders correctly", () => {
		const { container } = render(<HeroBody />);

		expect(container.firstChild).toHaveClass("hero-body");
		expect(container.firstChild).toMatchSnapshot();
	});
});
