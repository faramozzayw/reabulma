import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface FieldProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Alignment,
		React.HTMLProps<T> {
	isHorizontal?: boolean;
	isGrouped?: boolean;
	multiline?: boolean;
	hasAddons?: boolean;
}

const __Field: React.FC<FieldProps> = ({
	tag = "div",
	isHorizontal,
	isGrouped,
	multiline,
	isAlign,
	hasAddons,
	...props
}) => {
	const className = classnames(
		"field",
		{
			"is-horizontal": isHorizontal,
			"is-grouped": isGrouped,
			"is-grouped-multiline": isGrouped && multiline,
			"has-addons": hasAddons,
			[`has-addons-${isAlign}`]: hasAddons,
			[`is-grouped-${isAlign}`]: isGrouped,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Field = withHelpersModifiers(__Field);
