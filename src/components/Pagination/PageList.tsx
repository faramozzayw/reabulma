import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PageListProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __PageList: React.FC<PageListProps> = ({ tag = "ul", ...props }) => {
	const className = classnames("pagination-list", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const PageList = withHelpersModifiers(__PageList);
