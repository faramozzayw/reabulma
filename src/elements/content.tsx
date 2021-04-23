import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ContentProps<T> extends Bulma.Size, Bulma.Tag, HTMLProps<T> {}

const __Content: FC<ContentProps<HTMLElement>> = ({
	tag = "div",
	isSize,
	...props
}) => {
	const className = classnames(
		"content",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Content = withHelpersModifiers(__Content);
