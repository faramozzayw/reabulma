import React, { forwardRef } from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getAlignmentModifiers,
} from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface FileProps<T = HTMLInputElement>
	extends Bulma.FullWidth,
		Bulma.Boxed,
		Bulma.Color<"text">,
		Bulma.Size<"normal">,
		Bulma.Alignment,
		React.HTMLProps<T> {
	hasName?: boolean;
	fileLabel?: string;
	fileName?: string;
	icon?: string;
}

const FileIcon: React.FC<Pick<FileProps, "icon">> = ({ icon }) => (
	<span className="file-icon">
		<i className={icon}></i>
	</span>
);

interface FileLabelProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const FileLabel: React.FC<FileLabelProps> = ({ tag = "label", ...props }) => {
	const className = classnames("file-label", props.className);
	return React.createElement(tag, { ...props, className });
};

interface FileCTAProps<T = HTMLElement> extends Bulma.Tag, React.HTMLProps<T> {}

const FileCTA: React.FC<FileCTAProps> = ({ tag = "span", ...props }) => {
	const className = classnames("file-cta", props.className);
	return React.createElement(tag, { ...props, className });
};

const FileName: React.FC<Pick<FileProps, "fileName">> = ({ fileName }) =>
	Boolean(fileName?.trim()) ? (
		<span className="file-name">{fileName}</span>
	) : null;

const __File: React.FC<FileProps> = forwardRef<HTMLInputElement, FileProps>(
	(
		{
			isBoxed,
			isFullWidth,
			isColor,
			isSize,
			isAlign,
			hasName,
			fileLabel = "Choose a file…",
			icon = "fas fa-upload",
			fileName,
			...props
		},
		ref,
	) => {
		const fileClassName = classnames("file", {
			"is-boxed": isBoxed,
			"has-name": hasName,
			"is-fullwidth": isFullWidth,
			...getColorModifiers({ isColor }),
			...getSizeModifiers({ isSize }),
			...getAlignmentModifiers({ isAlign }),
		});

		return (
			<div className={fileClassName}>
				<FileLabel>
					<input {...props} className="file-input" type="file" ref={ref} />
					<FileCTA>
						<FileIcon icon={icon} />
						<FileLabel tag="span">{fileLabel}</FileLabel>
					</FileCTA>
					{hasName && <FileName fileName={fileName} />}
				</FileLabel>
			</div>
		);
	},
);

export const File = withHelpersModifiers(__File);
