import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ColumnProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Columns.Size,
		Bulma.Columns.Offset,
		React.HTMLProps<T> {}

const __Column: React.FC<ColumnProps> = ({
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

export const Column = withHelpersModifiers(__Column);
