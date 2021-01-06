import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarLinkProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __NavbarLink: React.FC<NavbarLinkProps<HTMLElement>> = ({
	tag = "a",
	isActive,
	...props
}) => {
	const className = classnames(
		"navbar-link",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const NavbarLink = withHelpersModifiers(__NavbarLink);
