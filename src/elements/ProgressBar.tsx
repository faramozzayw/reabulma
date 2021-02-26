import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getColorModifiers, getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ProgressBarProps
	extends Bulma.Size,
		Bulma.Color,
		React.HTMLProps<HTMLProgressElement> {}

const __ProgressBar: React.FC<ProgressBarProps> = ({
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
			<progress {...props} className={classNames} max={max}>
				{children}
			</progress>
		);
	}

	return (
		<progress {...props} className={classNames} value={value} max={max}>
			{children ?? value}
		</progress>
	);
};

export const ProgressBar = withHelpersModifiers(__ProgressBar);
