import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface LevelLeftProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __LevelLeft: React.FC<LevelLeftProps> = ({
	tag = "nav",
	...props
}) => {
	const className = classnames("level-left", props.className);

	return React.createElement(tag, { ...props, className });
};

export const LevelLeft = withHelpersModifiers(__LevelLeft);
