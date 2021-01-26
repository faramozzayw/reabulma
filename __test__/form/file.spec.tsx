import React, { useRef, useState } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { File as FileComponent } from "../../src";

const files: readonly File[] = [
	new File(["(⌐□_□)"], "chucknorris.png", {
		type: "image/png",
	}),
	new File(["(╯°□°）╯︵ ┻━┻"], "unflip.jpg", {
		type: "image/png",
	}),
];

const ControlledForm: React.FC = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSelectedFile(e.currentTarget?.files[0] ?? null);
	};

	return (
		<FileComponent
			hasName
			fileName={selectedFile?.name}
			onChange={handleChange}
		/>
	);
};

const setupControlledForm = () => {
	const utils = render(<ControlledForm />);
	const input = utils.container.getElementsByClassName(
		"file-input",
	)[0] as HTMLInputElement;
	const getFileNameElem = () =>
		utils.container.getElementsByClassName("file-name")[0] as HTMLElement;
	const wrapper = utils.container.firstChild;

	return { input, wrapper, getFileNameElem, ...utils };
};

interface UncontrolledFormProps {
	onFileSelect: (file: File) => void;
}

const UncontrolledForm: React.FC<UncontrolledFormProps> = ({
	onFileSelect,
}) => {
	const fileInput = useRef<HTMLInputElement>();
	const [fileName, setFileName] = useState<string>("");
	const handleFileInput = (e: React.FormEvent<HTMLInputElement>) => {
		const file = e.currentTarget?.files[0] ?? null;
		onFileSelect(file);
		setFileName(file?.name);
	};
	return (
		<FileComponent
			ref={fileInput}
			hasName
			fileName={fileName}
			onChange={handleFileInput}
		/>
	);
};

const setupUncontrolledForm = ({ onFileSelect }: UncontrolledFormProps) => {
	const utils = render(<UncontrolledForm onFileSelect={onFileSelect} />);
	const input = utils.container.getElementsByClassName(
		"file-input",
	)[0] as HTMLInputElement;
	const getFileNameElem = () =>
		utils.container.getElementsByClassName("file-name")[0] as HTMLElement;

	return { input, getFileNameElem, ...utils };
};

describe("Select", () => {
	it("renders correctly", () => {
		const { baseElement, container } = render(<FileComponent />);

		expect(container.firstChild).toHaveClass("file");
		expect(baseElement).toMatchSnapshot();
	});

	it("isColor", () => {
		const { container: dangerContainer } = render(
			<FileComponent isColor="danger" data-testid="danger" />,
		);
		const { container: primaryContainer } = render(
			<FileComponent isColor="primary" data-testid="primary" />,
		);
		const { container: warningContainer } = render(
			<FileComponent isColor="warning" data-testid="warning" />,
		);

		expect(dangerContainer.firstChild).toHaveClass("is-danger");
		expect(primaryContainer.firstChild).toHaveClass("is-primary");
		expect(warningContainer.firstChild).toHaveClass("is-warning");
	});

	it("`isSize` prop", () => {
		const { container: smallContainer } = render(
			<FileComponent isSize="small" data-testid="small" />,
		);
		const { container: mediumContainer } = render(
			<FileComponent isSize="medium" data-testid="medium" />,
		);
		const { container: largeContainer } = render(
			<FileComponent isSize="large" data-testid="large" />,
		);

		expect(smallContainer.firstChild).toHaveClass("is-small");
		expect(mediumContainer.firstChild).toHaveClass("is-medium");
		expect(largeContainer.firstChild).toHaveClass("is-large");
	});

	it("isBoxed", () => {
		const { container } = render(<FileComponent isBoxed />);
		expect(container.firstChild).toHaveClass("is-boxed");
	});

	it("isFullWidth", () => {
		const { container } = render(<FileComponent isFullWidth />);
		expect(container.firstChild).toHaveClass("is-fullwidth");
	});

	it("hasName", () => {
		const { container } = render(<FileComponent hasName data-testid />);
		expect(container.firstChild).toHaveClass("has-name");
	});

	it("fileName", () => {
		const { container: withoutHasName } = render(
			<FileComponent fileName="test.jpg" />,
		);
		expect(withoutHasName.firstChild).not.toHaveClass("has-name");
		expect(withoutHasName).not.toContain(/test\.jpg/i);

		const { container: withHasName, getByText } = render(
			<FileComponent hasName fileName="test.jpg" />,
		);
		expect(withHasName.firstChild).toHaveClass("has-name");
		expect(getByText(/test\.jpg/i)).toHaveClass("file-name");
		expect(getByText(/test\.jpg/i).textContent).toEqual("test.jpg");
	});

	it("input work correctly", () => {
		const { input, getFileNameElem } = setupControlledForm();

		fireEvent.change(input, { target: { files: [files[0]] } });
		expect(getFileNameElem().textContent).toBe("chucknorris.png");

		fireEvent.change(input, { target: { files: [files[1]] } });
		expect(getFileNameElem().textContent).toBe("unflip.jpg");
	});

	it("input work correctly with `ref`", () => {
		let currentName = "";
		const testFn = jest.fn((file: File) => (currentName = file.name));
		const { input, getFileNameElem } = setupUncontrolledForm({
			onFileSelect: testFn,
		});

		fireEvent.change(input, { target: { files: [files[0]] } });
		expect(testFn).toHaveBeenCalledTimes(1);
		expect(currentName).toEqual("chucknorris.png");
		expect(getFileNameElem().textContent).toBe("chucknorris.png");

		fireEvent.change(input, { target: { files: [files[1]] } });
		expect(testFn).toHaveBeenCalledTimes(2);
		expect(currentName).toBe("unflip.jpg");
		expect(getFileNameElem().textContent).toBe("unflip.jpg");

		fireEvent.change(input, { target: { files: [files[0]] } });
		expect(testFn).toHaveBeenCalledTimes(3);
		expect(currentName).toEqual("chucknorris.png");
		expect(getFileNameElem().textContent).toBe("chucknorris.png");
	});
});
