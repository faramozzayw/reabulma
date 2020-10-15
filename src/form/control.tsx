import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getLoadingModifiers } from "../utils";

export interface ControlProps<T>
	extends Bulma.Tag,
		Bulma.Loading,
		React.HTMLProps<T> {
	isExpanded?: boolean;
	hasIconsLeft?: boolean;
	hasIconsRight?: boolean;
}

export const Control = ({
	tag = "div",
	isExpanded,
	hasIconsLeft,
	hasIconsRight,
	isLoading,
	...props
}: ControlProps<HTMLElement>) => {
	const className = classnames(
		"control",
		{
			"is-expanded": isExpanded,
			"has-icons-left": hasIconsLeft,
			"has-icons-right": hasIconsRight,
			...getLoadingModifiers({ isLoading }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
