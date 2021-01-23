import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarBurgerProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __NavbarBurger: React.FC<NavbarBurgerProps<HTMLElement>> = ({
	tag = "div",
	isActive,
	...props
}) => {
	const className = classnames(
		"navbar-burger",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(
		tag,
		{ ...props, className },
		React.createElement("span", { "aria-hidden": true }),
		React.createElement("span", { "aria-hidden": true }),
		React.createElement("span", { "aria-hidden": true }),
	);
};

export const NavbarBurger = withHelpersModifiers(__NavbarBurger);
