import React from "react";
import classnames from "classnames";

import { Bulma } from "bulmaTypes";
import { getColorModifiers, getRoundedModifiers } from "utils";

export interface NotificationProps<T>
	extends Bulma.Tag,
		Bulma.Color,
		Bulma.Rounded,
		Bulma.Light,
		React.HTMLProps<T> {}

export const Notification: React.FC<NotificationProps<HTMLElement>> = ({
	tag = "div",
	isColor,
	isRounded,
	isLight,
	...props
}) => {
	const className = classnames(
		"notification",
		{
			...getColorModifiers({ isColor }),
			...getRoundedModifiers({ isRounded }),
			"is-light": isLight,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};
