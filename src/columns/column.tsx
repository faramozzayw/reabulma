import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ColumnProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Columns.Size,
		Bulma.Columns.Offset,
		HTMLProps<T> {}

const __Column: FC<ColumnProps> = ({
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

	return createElement(tag, { ...props, className });
};

export const Column = withHelpersModifiers(__Column);
