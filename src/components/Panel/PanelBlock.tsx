import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PanelBlockProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __PanelBlock: React.FC<PanelBlockProps<HTMLElement>> = ({
	tag = "a",
	isActive,
	...props
}) => {
	const className = classnames(
		"panel-block",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const PanelBlock = withHelpersModifiers(__PanelBlock);
