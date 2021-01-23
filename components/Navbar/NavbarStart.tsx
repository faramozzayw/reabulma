import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarStartProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __NavbarStart: React.FC<NavbarStartProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("navbar-start", props.className);

	return React.createElement(tag, { ...props, className });
};

export const NavbarStart = withHelpersModifiers(__NavbarStart);
