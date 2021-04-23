import classnames from "classnames";
import { HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { getColorModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface HelpProps<T> extends Bulma.Color, Bulma.Tag, HTMLProps<T> {}

const __Help = ({ tag = "div", isColor, ...props }: HelpProps<HTMLElement>) => {
	const className = classnames(
		"help",
		{
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Help = withHelpersModifiers(__Help);
