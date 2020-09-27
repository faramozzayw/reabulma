import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getColorModifiers, getSizeModifiers } from "../utils";

export interface ProgressBar
	extends Bulma.Size,
		Bulma.Color,
		React.HTMLProps<HTMLProgressElement> {}

export const ProgressBar: React.FC<ProgressBar> = ({
	max = "100",
	children,
	value,
	isSize,
	isColor,
	...props
}) => {
	const classNames = classnames(
		"progress",
		{
			...getColorModifiers({ isColor }),
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	if (!value) {
		return (
			<progress className={classNames} max={max} {...props}>
				{children}
			</progress>
		);
	}

	return (
		<progress className={classNames} value={value} max={max} {...props}>
			{children ?? value}
		</progress>
	);
};
