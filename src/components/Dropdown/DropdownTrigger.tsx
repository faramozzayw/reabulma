import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownTriggerProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __DropdownTrigger: React.FC<DropdownTriggerProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("dropdown-trigger", props.className);

	return React.createElement(tag, { ...props, className });
};

export const DropdownTrigger = withHelpersModifiers(__DropdownTrigger);
