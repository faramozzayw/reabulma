import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MediaProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __Media: React.FC<MediaProps> = ({ tag = "div", ...props }) => {
	const className = classnames("media", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Media = withHelpersModifiers(__Media);
