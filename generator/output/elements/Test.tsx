import classnames from "classnames";

import { Bulma } from "bulmaTypes";
import { getColorModifiers, getRoundedModifiers } from "utils";

export interface TestProps<T>
	extends Bulma.Tag,
		Bulma.Color,
		Bulma.Rounded,
		Bulma.Light,
		React.HTMLProps<T> {}

export const Test: React.FC<TestProps<HTMLElement>> = ({
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
