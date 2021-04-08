import { FC, HTMLProps, createElement } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getLoadingModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ControlProps<T>
	extends Bulma.Tag,
		Bulma.Loading,
		HTMLProps<T> {
	isExpanded?: boolean;
	hasIconsLeft?: boolean;
	hasIconsRight?: boolean;
}

const __Control = ({
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

	return createElement(tag, { ...props, className });
};

export const Control = withHelpersModifiers(__Control);
