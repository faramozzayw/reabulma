import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ProgressBar } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<ProgressBar />);

		expect(container.firstChild).toHaveClass("progress");
		expect(baseElement).toMatchSnapshot();
	});

	it("value", () => {
		const { container } = render(<ProgressBar value="50" />);

		expect(container.firstChild.textContent).toEqual("50");
	});

	it("isSize", () => {
		const { getByTestId } = render(
			<>
				<ProgressBar isSize="small" data-testid="small" />
				<ProgressBar isSize="medium" data-testid="medium" />
				<ProgressBar isSize="large" data-testid="large" />
			</>,
		);

		expect(getByTestId(/small/)).toHaveClass("is-small");
		expect(getByTestId(/medium/)).toHaveClass("is-medium");
		expect(getByTestId(/large/)).toHaveClass("is-large");
	});

	it("isColor", () => {
		const { container } = render(
			<ProgressBar isColor="primary" placeholder="primary" />,
		);

		expect(container.firstChild).toHaveClass("is-primary");
	});
});
