import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../../bulma";
import { getAlignmentModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export type ButtonsSizes = "small" | "medium" | "large";

export interface ButtonsProps<T>
	extends Bulma.Tag,
		/* Bulma.Size, */
		Bulma.Alignment,
		HTMLProps<T> {
	hasAddons?: boolean;
}

const __Buttons: FC<ButtonsProps<HTMLButtonElement | HTMLAnchorElement>> = ({
	tag = "div",
	/* isSize, */ isAlign,
	hasAddons,
	...props
}) => {
	const className = classnames(
		"buttons",
		{
			"has-addons": hasAddons,
			/* ...getSizeModifiers({ isSize }), */
			...getAlignmentModifiers({ isAlign }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Buttons = withHelpersModifiers(__Buttons);
