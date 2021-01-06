import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getColorModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PanelProps<T>
	extends Bulma.Tag,
		Bulma.Color,
		React.HTMLProps<T> {}

const __Panel: React.FC<PanelProps<HTMLElement>> = ({
	tag = "nav",
	isColor,
	...props
}) => {
	const className = classnames(
		"panel",
		{
			...getColorModifiers({ isColor }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Panel = withHelpersModifiers(__Panel);
