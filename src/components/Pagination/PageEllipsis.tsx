import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PageEllipsisProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __PageEllipsis: React.FC<PageEllipsisProps> = ({
	tag = "span",
	...props
}) => {
	const className = classnames("pagination-ellipsis", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const PageEllipsis = withHelpersModifiers(__PageEllipsis);
