import React, { useState } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { TextArea } from "../../src";

const Form = () => {
	const [value, setValue] = useState("");

	const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value);
	};

	return (
		<TextArea value={value} onChange={handleChange} aria-label="textarea" />
	);
};

const setupForm = () => {
	const utils = render(<Form />);
	const input = utils.getByLabelText("textarea") as HTMLTextAreaElement;

	return { input, ...utils };
};

describe("textarea", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<TextArea />);

		expect(container.firstChild).toHaveClass("textarea");
		expect(baseElement).toMatchSnapshot();
	});

	it("`hasFixedSize` prop", () => {
		const { container } = render(<TextArea hasFixedSize />);

		expect(container.firstChild).toHaveClass("has-fixed-size");
	});

	it("isState", () => {
		const { getByPlaceholderText } = render(
			<>
				<TextArea isState="active" placeholder="active" />
				<TextArea isState="focused" placeholder="focused" />
				<TextArea isState="hovered" placeholder="hovered" />
			</>,
		);

		expect(getByPlaceholderText(/active/i)).toHaveClass("is-active");
		expect(getByPlaceholderText(/focused/i)).toHaveClass("is-focused");
		expect(getByPlaceholderText(/hovered/i)).toHaveClass("is-hovered");
	});

	it("isColor", () => {
		const { getByPlaceholderText } = render(
			<>
				<TextArea isColor="danger" placeholder="danger" />
				<TextArea isColor="primary" placeholder="primary" />
				<TextArea isColor="warning" placeholder="warning" />
			</>,
		);

		expect(getByPlaceholderText(/danger/)).toHaveClass("is-danger");
		expect(getByPlaceholderText(/primary/)).toHaveClass("is-primary");
		expect(getByPlaceholderText(/warning/)).toHaveClass("is-warning");
	});

	it("`isSize` prop", () => {
		const { container } = render(<TextArea isSize="medium" />);
		expect(container.firstChild).toHaveClass("is-medium");
	});

	it("input work correctly", () => {
		const { input } = setupForm();

		fireEvent.change(input, { target: { value: "23" } });
		expect(input.value).toBe("23");

		fireEvent.change(input, { target: { value: "text" } });
		expect(input.value).toBe("text");
	});
});
