import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface LevelItemProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __LevelItem: React.FC<LevelItemProps> = ({
	tag = "nav",
	...props
}) => {
	const className = classnames("level-item", props.className);

	return React.createElement(tag, { ...props, className });
};

export const LevelItem = withHelpersModifiers(__LevelItem);
