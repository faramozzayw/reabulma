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

	it("`spacing` prop works correctly", () => {
		const { container } = render(<WithHelper spacing={["pl-1", "mb-5"]} />);

		expect(container.firstElementChild).toHaveClass("pl-1", "mb-5");
	});

	it("`transformation` prop for `Typography` works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper
					typography={{
						transformation: "lowercase",
					}}
				>
					lowercase
				</WithHelper>
				<WithHelper
					typography={{
						transformation: "capitalized",
					}}
				>
					capitalized
				</WithHelper>
			</>,
		);

		expect(getByText(/lowercase/i)).toHaveClass("is-lowercase");
		expect(getByText(/capitalized/i)).toHaveClass("is-capitalized");
	});

	it("`transformation` prop for `Typography` works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper
					typography={{
						weight: "semibold",
					}}
				>
					semibold
				</WithHelper>
				<WithHelper
					typography={{
						weight: "light",
					}}
				>
					light
				</WithHelper>
				<WithHelper
					typography={{
						weight: "medium",
					}}
				>
					medium
				</WithHelper>
			</>,
		);

		expect(getByText(/semibold/i)).toHaveClass("has-text-weight-semibold");
		expect(getByText(/light/i)).toHaveClass("has-text-weight-light");
		expect(getByText(/medium/i)).toHaveClass("has-text-weight-medium");
	});

	it("`transformation` prop for `Typography` works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper
					typography={{
						family: "monospace",
					}}
				>
					monospace
				</WithHelper>
				<WithHelper
					typography={{
						family: "code",
					}}
				>
					code
				</WithHelper>
			</>,
		);

		expect(getByText(/monospace/i)).toHaveClass("is-family-monospace");
		expect(getByText(/code/i)).toHaveClass("is-family-code");
	});

	it("`size`(number) prop for `Typography` works correctly", () => {
		const { container } = render(
			<WithHelper
				typography={{
					size: 7,
				}}
			/>,
		);

		expect(container.firstChild).toHaveClass("is-size-7");
	});

	it("`size`(object) prop for `Typography` works correctly", () => {
		const { container } = render(
			<WithHelper
				typography={{
					size: {
						fullhd: 1,
						mobile: 3,
						touch: 4,
					},
				}}
			/>,
		);

		expect(container.firstChild).toHaveClass(
			"is-size-3-mobile",
			"is-size-4-touch",
			"is-size-1-fullhd",
		);
	});

	it("`align`(empty value) prop for `Typography` works correctly", () => {
		const { container } = render(
			<WithHelper
				typography={{
					align: {},
				}}
			/>,
		);

		expect(container.firstChild).not.toHaveClass("has-text");
	});

	it("`align`(string) prop for `Typography` works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper
					typography={{
						align: "justified",
					}}
				>
					justified
				</WithHelper>
				<WithHelper
					typography={{
						align: "left",
					}}
				>
					left
				</WithHelper>
				<WithHelper
					typography={{
						align: "centered",
					}}
				>
					centered
				</WithHelper>
				<WithHelper
					typography={{
						align: "right",
					}}
				>
					right
				</WithHelper>
			</>,
		);

		expect(getByText(/justified/i)).toHaveClass("has-text-justified");
		expect(getByText(/left/i)).toHaveClass("has-text-left");
		expect(getByText(/centered/i)).toHaveClass("has-text-centered");
		expect(getByText(/right/i)).toHaveClass("has-text-right");
	});

	it("`align`(string) prop for `Typography` works correctly", () => {
		const { getByText } = render(
			<>
				<WithHelper
					typography={{
						align: {
							default: ["justified", true],
						},
					}}
				>
					justified
				</WithHelper>
				<WithHelper
					typography={{
						align: {
							touch: "left",
						},
					}}
				>
					left
				</WithHelper>
				<WithHelper
					typography={{
						align: {
							fullhd: ["centered", true],
						},
					}}
				>
					centered
				</WithHelper>
				<WithHelper
					typography={{
						align: {
							widescreen: "right",
						},
					}}
				>
					right
				</WithHelper>
			</>,
		);

		expect(getByText(/justified/i)).toHaveClass("has-text-justified-only");
		expect(getByText(/left/i)).toHaveClass("has-text-left-touch");
		expect(getByText(/centered/i)).toHaveClass("has-text-centered-fullhd-only");
		expect(getByText(/right/i)).toHaveClass("has-text-right-widescreen");
	});

	it("`isDisplay`(plain string) prop for `Typography` works correctly", () => {
		const { container } = render(<WithHelper isDisplay="flex-desktop-only" />);

		expect(container.firstChild).toHaveClass("is-flex-desktop-only");
	});

	it("`isDisplay`(array) prop for `Typography` works correctly", () => {
		const { container } = render(
			<WithHelper
				isDisplay={[
					"block-mobile-only",
					"inline-widescreen-only",
					"flex-fullhd",
				]}
			/>,
		);

		expect(container.firstChild).toHaveClass("is-block-mobile-only");
		expect(container.firstChild).toHaveClass("is-inline-widescreen-only");
		expect(container.firstChild).toHaveClass("is-flex-fullhd");
	});

	it("`isDisplay`(object) prop for `Typography` works correctly", () => {
		const { container } = render(
			<WithHelper
				isDisplay={{
					flex: "desktop-only",
					inline: ["fullhd", "desktop-only"],
				}}
			/>,
		);

		expect(container.firstChild).toHaveClass("is-flex-desktop-only");
		expect(container.firstChild).toHaveClass("is-inline-desktop-only");
		expect(container.firstChild).toHaveClass("is-inline-fullhd");
	});
});
