import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./utils";

export interface ColumnProps<T = HTMLElement>
	extends Bulma.Tag,
		//Bulma.FullWidth,
		Bulma.Columns.Size,
		React.HTMLProps<T> {
	isNarrow?: boolean;
}

export const Column: React.FC<ColumnProps> = ({
	tag = "div",
	isNarrow,
	//isFullWidth,
	isSize,
	...props
}) => {
	const className = classnames(
		"column",
		{
			"is-narrow": isNarrow,
			//"is-full": isFullWidth,
			...getSizeModifiers({ isSize: isSize as Bulma.Columns.Size }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
