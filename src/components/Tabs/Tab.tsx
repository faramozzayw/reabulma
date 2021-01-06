import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface TabProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __Tab: React.FC<TabProps<HTMLElement>> = ({
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

export const Tab = withHelpersModifiers(__Tab);
