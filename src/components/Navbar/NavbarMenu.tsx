import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarMenuProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __NavbarMenu: React.FC<NavbarMenuProps<HTMLElement>> = ({
	tag = "div",
	isActive,
	...props
}) => {
	const className = classnames(
		"navbar-menu",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const NavbarMenu = withHelpersModifiers(__NavbarMenu);
