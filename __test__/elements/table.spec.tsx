import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Table } from "../../src";

describe("breadcrumb", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Table />);

		expect(container.firstChild).toHaveClass("table");
		expect(baseElement).toMatchSnapshot();
	});

	it("isBordered", () => {
		const { getByTestId } = render(
			<>
				<Table isBordered data-testid="isBordered" />
				<Table data-testid="isNotBordered" />
			</>,
		);

		expect(getByTestId(/isBordered/)).toHaveClass("is-bordered");
		expect(getByTestId(/isNotBordered/)).not.toHaveClass("is-bordered");
	});

	it("isNarrow", () => {
		const { getByTestId } = render(
			<>
				<Table isNarrow data-testid="isNarrow" />
				<Table data-testid="isNotNarrow" />
			</>,
		);

		expect(getByTestId(/isNarrow/)).toHaveClass("is-narrow");
		expect(getByTestId(/isNotNarrow/)).not.toHaveClass("is-narrow");
	});

	it("isStriped", () => {
		const { getByTestId } = render(
			<>
				<Table isStriped data-testid="isStriped" />
				<Table data-testid="isNotStriped" />
			</>,
		);

		expect(getByTestId(/isStriped/)).toHaveClass("is-striped");
		expect(getByTestId(/isNotStriped/)).not.toHaveClass("is-striped");
	});

	it("isFullWidth", () => {
		const { getByTestId } = render(
			<>
				<Table isFullWidth data-testid="isFullWidth" />
				<Table data-testid="isNotFullWidth" />
			</>,
		);

		expect(getByTestId(/isFullWidth/)).toHaveClass("is-fullwidth");
		expect(getByTestId(/isNotFullWidth/)).not.toHaveClass("is-fullwidth");
	});

	it("isHoverable", () => {
		const { getByTestId } = render(
			<>
				<Table isHoverable data-testid="isHoverable" />
				<Table data-testid="isNotHoverable" />
			</>,
		);

		expect(getByTestId(/isHoverable/)).toHaveClass("is-hoverable");
		expect(getByTestId(/isNotHoverable/)).not.toHaveClass("is-hoverable");
	});
});
