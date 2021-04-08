import classnames from "classnames";
import { FC, HTMLProps, createElement, forwardRef } from "react";

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
		HTMLProps<T> {
	hasName?: boolean;
	fileLabel?: string;
	fileName?: string;
	icon?: string;
}

const FileIcon: FC<Pick<FileProps, "icon">> = ({ icon }) => (
	<span className="file-icon">
		<i className={icon}></i>
	</span>
);

interface FileLabelProps<T = HTMLElement> extends Bulma.Tag, HTMLProps<T> {}

const FileLabel: FC<FileLabelProps> = ({ tag = "label", ...props }) => {
	const className = classnames("file-label", props.className);
	return createElement(tag, { ...props, className });
};

interface FileCTAProps<T = HTMLElement> extends Bulma.Tag, HTMLProps<T> {}

const FileCTA: FC<FileCTAProps> = ({ tag = "span", ...props }) => {
	const className = classnames("file-cta", props.className);
	return createElement(tag, { ...props, className });
};

const FileName: FC<Pick<FileProps, "fileName">> = ({ fileName }) =>
	Boolean(fileName?.trim()) ? (
		<span className="file-name">{fileName}</span>
	) : null;

const __File: FC<FileProps> = forwardRef<HTMLInputElement, FileProps>(
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
