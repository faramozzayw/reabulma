import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownDividerProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __DropdownDivider: React.FC<DropdownDividerProps> = ({
	tag = "hr",
	...props
}) => {
	const className = classnames("dropdown-divider", props.className);

	return React.createElement(tag, { ...props, className });
};

export const DropdownDivider = withHelpersModifiers(__DropdownDivider);
