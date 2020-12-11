import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Columns, Column } from "../src";

describe("test <Columns />", () => {
	it("renders correctly", () => {
		const { baseElement } = render(
			<Columns>
				<Column isSize="1/2">first column</Column>
				<Column isSize="narrow">second column</Column>
			</Columns>,
		);

		expect(baseElement).toMatchSnapshot();
	});

	it("`isSize` prop works correctly for numeric values", () => {
		const { getByText } = render(
			<Columns>
				<Column isSize={1}>first column</Column>
				<Column isSize={7}>second column</Column>
			</Columns>,
		);

		expect(getByText(/first/i)).toHaveClass("column is-1");
		expect(getByText(/second/i)).toHaveClass("column is-7");
	});

	it("`isSize` prop works correctly for text values", () => {
		const { getByText } = render(
			<Columns>
				<Column isSize="1">1 column</Column>
				<Column isSize="3">2 column</Column>
				<Column isSize="7">3 column</Column>
			</Columns>,
		);

		expect(getByText(/1/i)).toHaveClass("column is-1");
		expect(getByText(/2/i)).toHaveClass("column is-3");
		expect(getByText(/3/i)).toHaveClass("column is-7");
	});

	it("`isSize` prop works correctly for fractions", () => {
		const { getByText } = render(
			<Columns>
				<Column isSize="1/4">1 column</Column>
				<Column isSize="4/5">2 column</Column>
				<Column isSize="2/3">3 column</Column>
				<Column isSize="2/5">4 column</Column>
			</Columns>,
		);

		expect(getByText(/1/i)).toHaveClass("column is-one-quarter");
		expect(getByText(/2/i)).toHaveClass("column is-four-fifths");
		expect(getByText(/3/i)).toHaveClass("column is-two-thirds");
		expect(getByText(/4/i)).toHaveClass("column is-two-fifths");
	});

	it("`isSize` prop works correctly for width values", () => {
		const { getByText } = render(
			<Columns>
				<Column isSize="full">1 column</Column>
				<Column isSize="narrow">2 column</Column>
			</Columns>,
		);

		expect(getByText(/1/i)).toHaveClass("column is-full");
		expect(getByText(/2/i)).toHaveClass("column is-narrow");
	});

	it("`isSize` prop works correctly with the specified platform", () => {
		const { getByText } = render(
			<Columns>
				<Column
					isSize={{
						mobile: "full",
						desktop: "1/2",
					}}
				>
					1 column
				</Column>
				<Column
					isSize={{
						default: "4/5",
					}}
				>
					2 column
				</Column>
				<Column
					isSize={{
						tablet: "2/5",
					}}
				>
					3 column
				</Column>
			</Columns>,
		);

		expect(getByText(/1/i)).toHaveClass(
			"column is-full-mobile is-half-desktop",
		);
		expect(getByText(/2/i)).toHaveClass("column is-four-fifths");
		expect(getByText(/3/i)).toHaveClass("column is-two-fifths-tablet");
	});
});
