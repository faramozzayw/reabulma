import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getActiveModifiers } from "../../utils";

export interface TabProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

export const Tab: React.FC<TabProps<HTMLElement>> = ({
	tag = "li",
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
