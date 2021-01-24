import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MenuLinkProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __MenuLink: React.FC<MenuLinkProps> = ({
	tag = "a",
	isActive,
	...props
}) => {
	const className = classnames(
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const MenuLink = withHelpersModifiers(__MenuLink);
