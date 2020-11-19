import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";

export interface FieldProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {
	isHorizontal?: boolean;
	isGrouped?: boolean;
	multiline?: boolean;
	hasAddons?: boolean;
	direction?: "left" | "centered" | "right";
}

export const Field: React.FC<FieldProps> = ({
	tag = "div",
	isHorizontal,
	isGrouped,
	multiline,
	hasAddons,
	direction,
	...props
}) => {
	const className = classnames(
		"field",
		{
			"is-horizontal": isHorizontal,
			"is-grouped": isGrouped,
			"is-grouped-multiline": isGrouped && multiline,
			"has-addons": hasAddons,
			[`has-addons-${direction}`]: hasAddons,
			[`is-grouped-${direction}`]: isGrouped,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
