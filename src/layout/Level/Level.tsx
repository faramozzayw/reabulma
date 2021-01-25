import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface LevelProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {
	isMobile?: boolean;
}

export const __Level: React.FC<LevelProps> = ({
	tag = "nav",
	isMobile,
	...props
}) => {
	const className = classnames(
		"level",
		{
			"is-mobile": isMobile,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Level = withHelpersModifiers(__Level);
