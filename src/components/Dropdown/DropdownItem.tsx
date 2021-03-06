import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownItemProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __DropdownItem: React.FC<DropdownItemProps> = ({
	tag = "div",
	isActive,
	...props
}) => {
	const className = classnames(
		"dropdown-item",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	const itemTag = props?.href ? "a" : tag;
	return React.createElement(itemTag, { ...props, className });
};

export const DropdownItem = withHelpersModifiers(__DropdownItem);
