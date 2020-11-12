import React from "react";
import classnames from "classnames";

import { Bulma } from "bulmaTypes";

export interface FieldProps<T> extends Bulma.Tag, React.HTMLProps<T> {
	isHorizontal?: boolean;
}

export const Field: React.FC<FieldProps<HTMLElement>> = ({
	tag = "div",
	isHorizontal,
	...props
}) => {
	const className = classnames(
		"field",
		{
			"is-horizontal": isHorizontal,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
