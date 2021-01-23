import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownMenuProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __DropdownMenu: React.FC<DropdownMenuProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("dropdown-menu", props.className);

	return React.createElement(tag, { ...props, className });
};

export const DropdownMenu = withHelpersModifiers(__DropdownMenu);
