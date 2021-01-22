import React, { useEffect, useState } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Select } from "../../src";

const Form = () => {
	const options = ["dark", "green", "blue", "red"];
	const [color, setColor] = useState(options[0]);

	useEffect(() => console.log("e.currentTarget.value"));

	const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
		setColor(e.currentTarget.value);
	};

	const optionsList = options.map((value) => (
		<option label={value} key={value}>
			{value}
		</option>
	));

	return (
		<>
			<h1>Your favorite color is {color}</h1>
			<Select onChange={handleChange} value={color} data-testid="select">
				{optionsList}
			</Select>
		</>
	);
};

const setupForm = () => {
	const utils = render(<Form />);
	const select = utils.getByTestId("select");
	const header = utils.getByText(/favorite color/);

	return { header, select, ...utils };
};

describe("Select", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<Select />);

		expect(container.firstChild).toHaveClass("select");
		expect(baseElement).toMatchSnapshot();
	});

	it("`isLoading` prop", () => {
		const { container: selectWithLoading } = render(<Select isLoading />);
		const { container: selectWithoutLoading } = render(
			<Select isLoading={false} />,
		);

		expect(selectWithLoading.firstChild).toHaveClass("is-loading");
		expect(selectWithoutLoading.firstChild).not.toHaveClass("is-loading");
	});

	it("isState", () => {
		const { container } = render(
			<Select isState="focused" data-testid="focused" />,
		);

		expect(container.firstChild).toHaveClass("is-focused");
	});

	it("isColor", () => {
		const { container } = render(
			<Select isColor="primary" placeholder="primary" />,
		);

		expect(container.firstChild).toHaveClass("is-primary");
	});

	it("`isSize` prop", () => {
		const { container } = render(<Select isSize="medium" />);
		expect(container.firstChild).toHaveClass("is-medium");
	});

	it("input work correctly", () => {
		const { header, getByText, getByTestId } = setupForm();

		expect(header.textContent).toContain("dark");

		fireEvent.change(getByTestId("select"), { target: { value: "red" } });
		expect(header.textContent).toContain("red");

		fireEvent.change(getByTestId("select"), { target: { value: "blue" } });
		expect(header.textContent).toContain("blue");
	});
});
