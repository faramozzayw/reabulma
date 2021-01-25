import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface LevelRightProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __LevelRight: React.FC<LevelRightProps> = ({
	tag = "nav",
	...props
}) => {
	const className = classnames("level-right", props.className);

	return React.createElement(tag, { ...props, className });
};

export const LevelRight = withHelpersModifiers(__LevelRight);
