import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MenuListProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __MenuList: React.FC<MenuListProps> = ({ tag = "ul", ...props }) => {
	const className = classnames("menu-list", props.className);

	return React.createElement(tag, { ...props, className });
};

export const MenuList = withHelpersModifiers(__MenuList);
