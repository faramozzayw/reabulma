import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MenuProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __Menu: React.FC<MenuProps> = ({ tag = "aside", ...props }) => {
	const className = classnames("menu", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Menu = withHelpersModifiers(__Menu);
