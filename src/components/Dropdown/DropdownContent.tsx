import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownContentProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __DropdownContent: React.FC<DropdownContentProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("dropdown-content", props.className);

	return React.createElement(tag, { ...props, className });
};

export const DropdownContent = withHelpersModifiers(__DropdownContent);
