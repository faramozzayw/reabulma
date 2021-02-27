import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Image } from "../../src";

describe("image", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Image />);

		expect(container.firstChild).toHaveClass("image");
		expect(baseElement).toMatchSnapshot();
	});

	it("isRatio", () => {
		const { getByTestId } = render(
			<>
				<Image isRatio="3by4" data-testid="3by4" />
				<Image isRatio="16by9" data-testid="16by9" />
				<Image isRatio="square" data-testid="square" />
			</>,
		);

		expect(getByTestId(/3by4/)).toHaveClass("is-3by4");
		expect(getByTestId(/16by9/)).toHaveClass("is-16by9");
		expect(getByTestId(/square/)).toHaveClass("is-square");
	});

	it("isSize", () => {
		const { getByTestId } = render(
			<>
				<Image isSize="128x128" data-testid="128" />
				<Image isSize="32x32" data-testid="32" />
				<Image isSize="16x16" data-testid="16" />
			</>,
		);

		expect(getByTestId(/128/)).toHaveClass("is-128x128");
		expect(getByTestId(/32/)).toHaveClass("is-32x32");
		expect(getByTestId(/16/)).toHaveClass("is-16x16");
	});

	it("isRounded", () => {
		const { container } = render(<Image isRounded />);

		expect(container.firstChild.firstChild).toHaveClass("is-rounded");
	});
});
