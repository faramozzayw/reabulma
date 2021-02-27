import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Icon } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Icon />);

		expect(container.firstChild).toHaveClass("icon");
		expect(baseElement).toMatchSnapshot();
	});

	it("icon", () => {
		const { getByTestId } = render(
			<Icon icon="test icon" data-testid="icon" />,
		);

		expect(getByTestId(/icon/).firstChild).toHaveClass("test icon");
	});
});
