import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BreadcrumbItem } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement } = render(<BreadcrumbItem />);

		expect(baseElement).toMatchSnapshot();
	});

	it("isActive", () => {
		const { getByTestId } = render(
			<>
				<BreadcrumbItem isActive={false} data-testid="isNonActive" />
				<BreadcrumbItem isActive data-testid="isActive" />
			</>,
		);

		expect(getByTestId(/isActive/)).toHaveClass("is-active");
		expect(getByTestId(/isNonActive/)).not.toHaveClass("is-active");
	});
});
