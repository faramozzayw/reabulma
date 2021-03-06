import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getAlignmentModifiers, getSizeModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface TabsProps<T>
	extends Bulma.Alignment,
		Bulma.FullWidth,
		Bulma.Size,
		Bulma.Tag,
		React.HTMLProps<T> {
	isBoxed?: boolean;
	isToggle?: boolean;
	isToggleRounded?: boolean;
}

const __Tabs: React.FC<TabsProps<HTMLElement>> = ({
	tag = "div",
	isAlign,
	isSize,
	isBoxed,
	isToggle,
	isToggleRounded,
	isFullWidth,
	...props
}) => {
	const className = classnames(
		"tabs",
		{
			"is-boxed": isBoxed,
			"is-toggle": isToggle,
			"is-toggle-rounded": isToggleRounded,
			"is-fullwidth": isFullWidth,
			...getAlignmentModifiers({ isAlign }),
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Tabs = withHelpersModifiers(__Tabs);
