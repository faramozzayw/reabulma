import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import {
	getSizeModifiers,
	getColorModifiers,
	getRoundedModifiers,
	getLightModifiers,
	getLinkModifiers,
} from "../utils";

export interface Tag<T>
	extends Bulma.Size,
		Bulma.Color,
		Bulma.Tag,
		Bulma.Light,
		Bulma.Link,
		Bulma.Rounded,
		React.HTMLProps<T> {}

export const Tag: React.FC<Tag<HTMLElement>> = ({
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

	return React.createElement(tag, { ...props, className });
};
