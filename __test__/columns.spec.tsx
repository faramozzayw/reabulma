import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Columns, Column } from "../src";
import type { ColumnsProps } from "../src/columns/columns";

const TestColumnsGrid = (props: ColumnsProps) => (
	<Columns {...props}>
		<Column>first column</Column>
		<Column>second column</Column>
	</Columns>
);

describe("test <Column />", () => {
	it("`multiline` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid multiline />);

		expect(container.firstChild).toHaveClass("columns is-multiline");
	});

	it("`isCentered` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid isCentered />);

		expect(container.firstChild).toHaveClass("columns is-centered");
	});

	it("`isVCentered` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid isVCentered />);

		expect(container.firstChild).toHaveClass("columns is-vcentered");
	});

	it("`isGapless` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid isGapless />);

		expect(container.firstChild).toHaveClass("columns is-gapless");
	});

	it("`isMobile` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid isMobile />);

		expect(container.firstChild).toHaveClass("columns is-mobile");
	});

	it("`isDesktop` prop works correctly", () => {
		const { container } = render(<TestColumnsGrid isDesktop />);

		expect(container.firstChild).toHaveClass("columns is-desktop");
	});
});
