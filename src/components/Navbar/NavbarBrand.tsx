import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarBrandProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __NavbarBrand: React.FC<NavbarBrandProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("navbar-brand", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const NavbarBrand = withHelpersModifiers(__NavbarBrand);
