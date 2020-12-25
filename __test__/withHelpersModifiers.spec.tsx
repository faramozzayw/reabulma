import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { withHelpersModifiers } from "../src";

const Block: React.FC<unknown> = ({ children, ...props }) => (
	<div {...props}>{children}</div>
);
const WithHelper = withHelpersModifiers(Block);

describe("test `withHelpersModifiers`", () => {
	it("`isPulled` prop works correctly", () => {
		const { container: left } = render(<WithHelper isPulled="left" />);
		expect(left.firstChild).toHaveClass("is-pulled-left");

		const { container: right } = render(<WithHelper isPulled="right" />);
		expect(right.firstChild).toHaveClass("is-pulled-right");
	});

	it("`isClearFix` prop works correctly", () => {
		const { container } = render(<WithHelper isClearFix />);

		expect(container.firstChild).toHaveClass("is-clearfix");
	});

	it("`isOverlay` prop works correctly", () => {
		const { container } = render(<WithHelper isOverlay />);

		expect(container.firstChild).toHaveClass("is-overlay");
	});

	it("`isClipped` prop works correctly", () => {
		const { container } = render(<WithHelper isClipped />);

		expect(container.firstChild).toHaveClass("is-clipped");
	});

	it("`isRadiusless` prop works correctly", () => {
		const { container } = render(<WithHelper isRadiusless />);

		expect(container.firstChild).toHaveClass("is-radiusless");
	});

	it("`isShadowless` prop works correctly", () => {
		const { container } = render(<WithHelper isShadowless />);

		expect(container.firstChild).toHaveClass("is-shadowless");
	});

	it("`isUnselectable` prop works correctly", () => {
		const { container } = render(<WithHelper isUnselectable />);

		expect(container.firstChild).toHaveClass("is-unselectable");
	});

	it("`isClickable` prop works correctly", () => {
		const { container } = render(<WithHelper isClickable />);

		expect(container.firstChild).toHaveClass("is-clickable");
	});

	it("`isRelative` prop works correctly", () => {
		const { container } = render(<WithHelper isRelative />);

		expect(container.firstChild).toHaveClass("is-relative");
	});

	it("`isAlign` prop works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper isAlign="justified">justified</WithHelper>
				<WithHelper isAlign="left">left</WithHelper>
				<WithHelper isAlign="centered">centered</WithHelper>
				<WithHelper isAlign="right">right</WithHelper>
			</>,
		);

		expect(getByText(/justified/i)).toHaveClass("has-text-justified");
		expect(getByText(/left/i)).toHaveClass("has-text-left");
		expect(getByText(/centered/i)).toHaveClass("has-text-centered");
		expect(getByText(/right/i)).toHaveClass("has-text-right");
	});

	it("`hasTextColor` prop works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper hasTextColor="danger">danger</WithHelper>
				<WithHelper hasTextColor="success">success</WithHelper>
				<WithHelper hasTextColor="grey-lighter">grey-lighter</WithHelper>
				<WithHelper hasTextColor="primary-light">primary-light</WithHelper>
				<WithHelper hasTextColor="success-dark">success-dark</WithHelper>
				<WithHelper hasTextColor="white-ter">white-ter</WithHelper>
			</>,
		);

		expect(getByText(/danger/i)).toHaveClass("has-text-danger");
		expect(getByText(/success$/i)).toHaveClass("has-text-success");
		expect(getByText(/grey-lighter/i)).toHaveClass("has-text-grey-lighter");
		expect(getByText(/primary-light/i)).toHaveClass("has-text-primary-light");
		expect(getByText(/success-dark/i)).toHaveClass("has-text-success-dark");
		expect(getByText(/white-ter/i)).toHaveClass("has-text-white-ter");
	});

	it("`hasBackgroundColor` prop works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper hasBackgroundColor="danger">danger</WithHelper>
				<WithHelper hasBackgroundColor="success">success</WithHelper>
				<WithHelper hasBackgroundColor="grey-lighter">grey-lighter</WithHelper>
				<WithHelper hasBackgroundColor="primary-light">
					primary-light
				</WithHelper>
				<WithHelper hasBackgroundColor="success-dark">success-dark</WithHelper>
				<WithHelper hasBackgroundColor="white-ter">white-ter</WithHelper>
			</>,
		);

		expect(getByText(/danger/i)).toHaveClass("has-background-danger");
		expect(getByText(/success$/i)).toHaveClass("has-background-success");
		expect(getByText(/grey-lighter/i)).toHaveClass(
			"has-background-grey-lighter",
		);
		expect(getByText(/primary-light/i)).toHaveClass(
			"has-background-primary-light",
		);
		expect(getByText(/success-dark/i)).toHaveClass(
			"has-background-success-dark",
		);
		expect(getByText(/white-ter/i)).toHaveClass("has-background-white-ter");
	});
});
