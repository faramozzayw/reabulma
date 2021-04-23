import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { getHeadingModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface TitleProps<T> extends Bulma.Tag, Bulma.Heading, HTMLProps<T> {
	isSubtitle?: boolean;
}

const __Title: FC<TitleProps<HTMLElement>> = ({
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

	return createElement(tag, { ...props, className });
};

export const Title = withHelpersModifiers(__Title);
