import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MediaContentProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __MediaContent: React.FC<MediaContentProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("media-content", props.className);

	return React.createElement(tag, { ...props, className });
};

export const MediaContent = withHelpersModifiers(__MediaContent);
