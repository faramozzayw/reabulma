import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";

export interface FieldLabelProps<T>
	extends Bulma.Tag,
		Bulma.Size,
		React.HTMLProps<T> {}

export const FieldLabel: React.FC<FieldLabelProps<HTMLElement>> = ({
	tag = "div",
	isSize,
	...props
}) => {
	const className = classnames(
		"field-label",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
