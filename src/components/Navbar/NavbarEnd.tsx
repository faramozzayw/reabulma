import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarEndProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __NavbarEnd: React.FC<NavbarEndProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("navbar-end", props.className);

	return React.createElement(tag, { ...props, className });
};

export const NavbarEnd = withHelpersModifiers(__NavbarEnd);
