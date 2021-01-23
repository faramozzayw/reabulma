import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Breadcrumb } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Breadcrumb />);

		expect(container.firstChild).toHaveClass("breadcrumb");
		expect(baseElement).toMatchSnapshot();
	});

	it("isSize", () => {
		const { getByTestId } = render(
			<>
				<Breadcrumb isSize="small" data-testid="small" />
				<Breadcrumb isSize="medium" data-testid="medium" />
				<Breadcrumb isSize="large" data-testid="large" />
			</>,
		);

		expect(getByTestId(/small/)).toHaveClass("is-small");
		expect(getByTestId(/medium/)).toHaveClass("is-medium");
		expect(getByTestId(/large/)).toHaveClass("is-large");
	});

	it("hasSeparator", () => {
		const { getByTestId } = render(
			<>
				<Breadcrumb hasSeparator="arrow" data-testid="arrow" />
				<Breadcrumb hasSeparator="bullet" data-testid="bullet" />
				<Breadcrumb hasSeparator="dot" data-testid="dot" />
				<Breadcrumb hasSeparator="succeeds" data-testid="succeeds" />
			</>,
		);

		expect(getByTestId(/arrow/)).toHaveClass("has-arrow-separator");
		expect(getByTestId(/bullet/)).toHaveClass("has-bullet-separator");
		expect(getByTestId(/dot/)).toHaveClass("has-dot-separator");
		expect(getByTestId(/succeeds/)).toHaveClass("has-succeeds-separator");
	});
});
