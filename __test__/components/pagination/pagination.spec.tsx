import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Pagination } from "../../../src";

describe("dropdown", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Pagination />);

		expect(container.firstChild).toHaveClass("pagination");
		expect(baseElement).toMatchSnapshot();
	});

	it("isAlign", () => {
		const { getByTestId } = render(
			<>
				<Pagination isAlign="centered" data-testid="centered" />
				<Pagination isAlign="right" data-testid="right" />
			</>,
		);

		expect(getByTestId(/centered/)).toHaveClass("is-centered");
		expect(getByTestId(/right/)).toHaveClass("is-right");
	});

	it("isAlign", () => {
		const { getByTestId } = render(
			<>
				<Pagination isSize="small" data-testid="small" />
				<Pagination isSize="medium" data-testid="medium" />
				<Pagination isSize="large" data-testid="large" />
			</>,
		);

		expect(getByTestId(/small/)).toHaveClass("is-small");
		expect(getByTestId(/medium/)).toHaveClass("is-medium");
		expect(getByTestId(/large/)).toHaveClass("is-large");
	});

	it("isAlign", () => {
		const { getByTestId } = render(
			<>
				<Pagination isRounded data-testid="rounded" />
				<Pagination data-testid="notRounded" />
			</>,
		);

		expect(getByTestId(/rounded/)).toHaveClass("is-rounded");
		expect(getByTestId(/large/)).not.toHaveClass("is-rounded");
	});
});
