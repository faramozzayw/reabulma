import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import {
	getSizeModifiers,
	getColorModifiers,
	getRoundedModifiers,
	getLightModifiers,
	getLinkModifiers,
} from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface TagProps<T>
	extends Bulma.Size,
		Bulma.Color,
		Bulma.Tag,
		Bulma.Light,
		Bulma.Link,
		Bulma.Rounded,
		HTMLProps<T> {}

const __Tag: FC<TagProps<HTMLElement>> = ({
	tag = "span",
	isSize,
	isColor,
	isLight,
	isLink,
	isRounded,
	...props
}) => {
	const className = classnames(
		"tag",
		{
			...getLinkModifiers({ isLink }),
			...getLightModifiers({ isLight }),
			...getRoundedModifiers({ isRounded }),
			...getSizeModifiers({ isSize }),
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Tag = withHelpersModifiers(__Tag);
