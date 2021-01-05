import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Tile } from "../../src";

describe("Tile", () => {
	it("renders correctly", () => {
		const { container } = render(<Tile />);

		expect(container.firstChild).toHaveClass("tile");
		expect(container.firstChild).toMatchSnapshot();
	});

	it("`isAncestor` prop", () => {
		const { container } = render(<Tile isAncestor />);
		expect(container.firstChild).toHaveClass("is-ancestor");
	});

	it("`isParent` prop", () => {
		const { container } = render(<Tile isParent />);
		expect(container.firstChild).toHaveClass("is-parent");
	});

	it("`isChild` prop", () => {
		const { container } = render(<Tile isChild />);
		expect(container.firstChild).toHaveClass("is-child");
	});

	it("`isVertical` prop", () => {
		const { container } = render(<Tile isVertical />);
		expect(container.firstChild).toHaveClass("is-vertical");
	});
});
