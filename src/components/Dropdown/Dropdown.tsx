import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface DropdownProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {
	isUp?: boolean;
	isRight?: boolean;
	isHoverable?: boolean;
}

const __Dropdown: React.FC<DropdownProps> = ({
	tag = "div",
	isActive,
	isUp,
	isRight,
	isHoverable,
	...props
}) => {
	const className = classnames(
		"dropdown",
		{
			...getActiveModifiers({ isActive }),
			"is-up": isUp,
			"is-right": isRight,
			"is-hoverable": isHoverable,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Dropdown = withHelpersModifiers(__Dropdown);
