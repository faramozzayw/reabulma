import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MenuLabelProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __MenuLabel: React.FC<MenuLabelProps> = ({ tag = "p", ...props }) => {
	const className = classnames("menu-label", props.className);

	return React.createElement(tag, { ...props, className });
};

export const MenuLabel = withHelpersModifiers(__MenuLabel);
