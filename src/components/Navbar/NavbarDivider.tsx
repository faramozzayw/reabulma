import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarDividerProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __NavbarDivider: React.FC<NavbarDividerProps<HTMLElement>> = ({
	tag = "hr",
	...props
}) => {
	const className = classnames("navbar-divider", props.className);

	return React.createElement(tag, { ...props, className });
};

export const NavbarDivider = withHelpersModifiers(__NavbarDivider);
