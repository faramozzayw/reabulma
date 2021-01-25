import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getSizeModifiers, getColorModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MessageProps<T = HTMLElement>
	extends Bulma.Tag,
		Bulma.Size,
		Bulma.Color,
		React.HTMLProps<T> {}

const __Message: React.FC<MessageProps> = ({
	tag = "article",
	isSize,
	isColor,
	...props
}) => {
	const className = classnames(
		"message",
		{
			...getSizeModifiers({ isSize }),
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const Message = withHelpersModifiers(__Message);
