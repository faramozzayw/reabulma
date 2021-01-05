import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Hero } from "../../../src";

describe("Hero", () => {
	it("renders correctly", () => {
		const { container } = render(<Hero />);

		expect(container.firstChild).toHaveClass("hero");
		expect(container.firstChild).toMatchSnapshot();
	});

	it("`isBold` prop", () => {
		const { container } = render(<Hero isBold />);
		expect(container.firstChild).toHaveClass("is-bold");
	});

	it("`isSize` prop", () => {
		const { container } = render(<Hero isSize="medium" />);
		expect(container.firstChild).toHaveClass("is-medium");
	});

	it("`isFullHeight` prop", () => {
		const { container } = render(<Hero isFullHeight />);
		expect(container.firstChild).toHaveClass("is-fullheight");
	});

	it("`isHalfHeight` prop", () => {
		const { container } = render(<Hero isHalfHeight />);
		expect(container.firstChild).toHaveClass("is-halfheight");
	});

	it("isColor", () => {
		const { getByText } = render(
			<>
				<Hero isColor="danger">danger</Hero>
				<Hero isColor="primary">primary</Hero>
				<Hero isColor="warning">warning</Hero>
			</>,
		);

		expect(getByText(/danger/)).toHaveClass("is-danger");
		expect(getByText(/primary/)).toHaveClass("is-primary");
		expect(getByText(/warning/)).toHaveClass("is-warning");
	});
});
