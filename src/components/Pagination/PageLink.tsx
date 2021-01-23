import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PagеLinkProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __PagеLink: React.FC<PagеLinkProps> = ({
	tag = "a",
	isActive,
	...props
}) => {
	const className = classnames(
		"pagination-link",
		{
			"is-current": isActive,
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const PagеLink = withHelpersModifiers(__PagеLink);
