import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getColorModifiers, getSizeModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface HeroProps<T>
	extends Bulma.Size,
		Bulma.Tag,
		Bulma.Color,
		React.HTMLProps<T> {
	isBold?: boolean;
	isFullHeight?: boolean;
	isHalfHeight?: boolean;
}

const __Hero: React.FC<HeroProps<HTMLElement>> = ({
	tag = "section",
	isColor,
	isSize,
	isBold,
	isFullHeight,
	isHalfHeight,
	...props
}) => {
	const className = classnames(
		"hero",
		{
			"is-bold": isBold,
			"is-fullheight": isFullHeight,
			"is-halfheight": isHalfHeight,
			...getColorModifiers({ isColor }),
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Hero = withHelpersModifiers(__Hero);
