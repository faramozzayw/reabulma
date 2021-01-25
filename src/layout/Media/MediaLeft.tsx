import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MediaLeftProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __MediaLeft: React.FC<MediaLeftProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("media-left", props.className);

	return React.createElement(tag, { ...props, className });
};

export const MediaLeft = withHelpersModifiers(__MediaLeft);
