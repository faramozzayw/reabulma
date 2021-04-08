import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "../bulma";
import { getColorModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface NotificationProps<T>
	extends Bulma.Tag,
		Bulma.Color,
		Bulma.Light,
		HTMLProps<T> {}

const __Notification: FC<NotificationProps<HTMLElement>> = ({
	tag = "div",
	isColor,
	isLight,
	...props
}) => {
	const className = classnames(
		"notification",
		{
			"is-light": isLight,
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Notification = withHelpersModifiers(__Notification);
