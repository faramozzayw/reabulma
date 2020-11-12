import React from "react";
import classnames from "classnames";

import { Bulma } from "bulmaTypes";
import { getSizeModifiers } from "utils";

export interface ContentProps<T>
	extends Bulma.Tag,
		Bulma.Size,
		React.HTMLProps<T> {}

export const Content: React.FC<ContentProps<HTMLElement>> = ({
	tag = "div",
	isSize,
	...props
}) => {
	const className = classnames(
		"content",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
