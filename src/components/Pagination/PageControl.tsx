import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PagеControlProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {
	isPrevious?: boolean;
	isNext?: boolean;
}

const __PagеControl: React.FC<PagеControlProps> = ({
	tag = "a",
	isPrevious,
	isNext,
	...props
}) => {
	const className = classnames(
		{
			"pagination-next": isNext,
			"pagination-previous": isPrevious,
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const PagеControl = withHelpersModifiers(__PagеControl);
