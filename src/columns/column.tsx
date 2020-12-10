import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./utils";

export interface ColumnProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Columns.Size,
		Bulma.Columns.Offset,
		React.HTMLProps<T> {}

export const Column: React.FC<ColumnProps> = ({
	tag = "div",
	isOffset,
	isSize,
	...props
}) => {
	const className = classnames(
		"column",
		{
			...getSizeModifiers({ isSize: isSize as Bulma.Columns.Size }),
			...getSizeModifiers({ isSize: isOffset, isOffset: true }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
