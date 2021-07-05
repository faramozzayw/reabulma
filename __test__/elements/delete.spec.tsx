import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Delete } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Delete />);

		expect(container.firstChild).toHaveClass("delete");
		expect(baseElement).toMatchSnapshot();
	});

	it("`isSize` prop", () => {
		const { getByTestId } = render(
			<>
				<Delete isSize="small" data-testid="small" />
				<Delete isSize="normal" data-testid="normal" />
				<Delete isSize="medium" data-testid="medium" />
				<Delete isSize="large" data-testid="large" />
			</>,
		);

		expect(getByTestId(/small/)).toHaveClass("is-small");
		expect(getByTestId(/normal/)).toHaveClass("is-normal");
		expect(getByTestId(/medium/)).toHaveClass("is-medium");
		expect(getByTestId(/large/)).toHaveClass("is-large");
	});
});
