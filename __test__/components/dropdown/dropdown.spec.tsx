import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Dropdown } from "../../../src";

describe("dropdown", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Dropdown />);

		expect(container.firstChild).toHaveClass("dropdown");
		expect(baseElement).toMatchSnapshot();
	});

	it("isUp", () => {
		const { getByTestId } = render(
			<>
				<Dropdown isUp data-testid="isUp" />
				<Dropdown data-testid="isNotUp" />
			</>,
		);

		expect(getByTestId(/isUp/)).toHaveClass("is-up");
		expect(getByTestId(/isNotUp/)).not.toHaveClass("is-up");
	});

	it("isRight", () => {
		const { getByTestId } = render(
			<>
				<Dropdown isRight data-testid="isRight" />
				<Dropdown data-testid="isNotRight" />
			</>,
		);

		expect(getByTestId(/isRight/)).toHaveClass("is-right");
		expect(getByTestId(/isNotRight/)).not.toHaveClass("is-right");
	});

	it("isHoverable", () => {
		const { getByTestId } = render(
			<>
				<Dropdown isHoverable data-testid="isHoverable" />
				<Dropdown data-testid="isNotHoverable" />
			</>,
		);

		expect(getByTestId(/isHoverable/)).toHaveClass("is-hoverable");
		expect(getByTestId(/isNotHoverable/)).not.toHaveClass("is-hoverable");
	});
});
