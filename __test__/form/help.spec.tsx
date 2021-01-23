import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Help } from "../../src";

describe("textarea", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Help />);

		expect(container.firstChild).toHaveClass("help");
		expect(baseElement).toMatchSnapshot();
	});

	it("isColor", () => {
		const { getByTestId } = render(
			<>
				<Help isColor="danger" data-testid="danger" />
				<Help isColor="primary" data-testid="primary" />
				<Help isColor="warning" data-testid="warning" />
			</>,
		);

		expect(getByTestId(/danger/)).toHaveClass("is-danger");
		expect(getByTestId(/primary/)).toHaveClass("is-primary");
		expect(getByTestId(/warning/)).toHaveClass("is-warning");
	});
});
