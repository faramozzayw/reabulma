import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getSizeModifiers, getAlignmentModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PaginationProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Size<"normal">,
		Bulma.Alignment<"left">,
		Bulma.Rounded,
		React.HTMLProps<T> {}

const __Pagination: React.FC<PaginationProps> = ({
	tag = "nav",
	isSize,
	isRounded,
	isAlign = "centered",
	...props
}) => {
	const className = classnames(
		"pagination",
		{
			...getAlignmentModifiers({ isAlign }),
			...getSizeModifiers({ isSize }),
			"is-rounded": isRounded,
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const Pagination = withHelpersModifiers(__Pagination);
