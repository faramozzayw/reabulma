import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getColorModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface NavbarProps<T>
	extends Bulma.Tag,
		Bulma.Color,
		React.HTMLProps<T> {
	isTransparent?: boolean;
	isFixedTop?: boolean;
	isFixedBottom?: boolean;
}

const __Navbar: React.FC<NavbarProps<HTMLElement>> = ({
	tag = "nav",
	isTransparent,
	isColor,
	isFixedTop,
	isFixedBottom,
	...props
}) => {
	const className = classnames(
		"navbar",
		{
			"is-transparent": isTransparent,
			"is-fixed-top": isFixedTop && !isFixedBottom,
			"is-fixed-bottom": isFixedBottom && !isFixedTop,
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Navbar = withHelpersModifiers(__Navbar);
