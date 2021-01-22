import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HeroHeader } from "../../../src";

describe("HeroHeader", () => {
	it("renders correctly", () => {
		const { container } = render(<HeroHeader />);

		expect(container.firstChild).toHaveClass("hero-head");
		expect(container.firstChild).toMatchSnapshot();
	});
});
