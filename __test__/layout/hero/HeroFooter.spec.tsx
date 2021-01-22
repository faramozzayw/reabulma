import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HeroFooter } from "../../../src";

describe("HeroFooter", () => {
	it("renders correctly", () => {
		const { container } = render(<HeroFooter />);

		expect(container.firstChild).toHaveClass("hero-foot");
		expect(container.firstChild).toMatchSnapshot();
	});
});
