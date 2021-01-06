import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getSizeModifiers, getAlignmentModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export type ButtonsSizes = "small" | "medium" | "large";

export interface ButtonsProps<T>
	extends Bulma.Tag,
		/* Bulma.Size, */
		Bulma.Alignment,
		React.HTMLProps<T> {
	hasAddons?: boolean;
}

const __Buttons: React.FC<
	ButtonsProps<HTMLButtonElement | HTMLAnchorElement>
> = ({ tag = "div", /* isSize, */ isAlign, hasAddons, ...props }) => {
	const className = classnames(
		"buttons",
		{
			"has-addons": hasAddons,
			/* ...getSizeModifiers({ isSize }), */
			...getAlignmentModifiers({ isAlign }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Buttons = withHelpersModifiers(__Buttons);
