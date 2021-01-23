import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarItemProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {
	isHoverable?: boolean;
	hasDropdown?: boolean;
	dropdownUp?: boolean;
}

const __NavbarItem: React.FC<NavbarItemProps<HTMLElement>> = ({
	tag = "div",
	isHoverable,
	hasDropdown,
	dropdownUp,
	isActive,
	...props
}) => {
	const className = classnames(
		"navbar-item",
		{
			"has-dropdown": hasDropdown,
			"is-hoverable": isHoverable,
			"has-dropdown-up": hasDropdown && dropdownUp,
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	const htmlTag = props.href ? "a" : tag;

	return React.createElement(htmlTag, {
		...props,
		className,
	});
};

export const NavbarItem = withHelpersModifiers(__NavbarItem);
