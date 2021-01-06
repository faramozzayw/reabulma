import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getHeadingModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface TitleProps<T>
	extends Bulma.Tag,
		Bulma.Heading,
		React.HTMLProps<T> {
	isSubtitle?: boolean;
}

const __Title: React.FC<TitleProps<HTMLElement>> = ({
	tag = "h1",
	isSize,
	isSpaced,
	isSubtitle,
	...props
}) => {
	const titleType = isSubtitle ? "subtitle" : "title";

	const className = classnames(
		titleType,
		{
			...getHeadingModifiers({
				isSize: isSize ? isSize : isSubtitle ? 5 : 3,
				isSpaced,
			}),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Title = withHelpersModifiers(__Title);
