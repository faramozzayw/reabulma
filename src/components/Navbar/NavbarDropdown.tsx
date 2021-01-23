import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarDropdownProps<T> extends Bulma.Tag, React.HTMLProps<T> {
	isBoxed?: boolean;
}

const __NavbarDropdown: React.FC<NavbarDropdownProps<HTMLElement>> = ({
	tag = "div",
	isBoxed,
	...props
}) => {
	const className = classnames(
		"navbar-dropdown",
		{
			"is-boxed": isBoxed,
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const NavbarDropdown = withHelpersModifiers(__NavbarDropdown);
