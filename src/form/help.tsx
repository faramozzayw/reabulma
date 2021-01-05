import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getColorModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface HelpProps<T>
	extends Bulma.Color,
		Bulma.Tag,
		React.HTMLProps<T> {}

const __Help = ({ tag = "div", isColor, ...props }: HelpProps<HTMLElement>) => {
	const className = classnames(
		"help",
		{
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Help = withHelpersModifiers(__Help);
