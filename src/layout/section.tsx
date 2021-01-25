import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface SectionProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Size<"small" | "normal">,
		React.HTMLProps<T> {}

export const __Section: React.FC<SectionProps> = ({
	tag = "section",
	isSize,
	...props
}) => {
	const className = classnames(
		"section",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Section = withHelpersModifiers(__Section);
