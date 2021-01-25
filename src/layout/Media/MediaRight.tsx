import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MediaRightProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __MediaRight: React.FC<MediaRightProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("media-right", props.className);

	return React.createElement(tag, { ...props, className });
};

export const MediaRight = withHelpersModifiers(__MediaRight);
