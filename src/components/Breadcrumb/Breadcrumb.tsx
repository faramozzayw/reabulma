import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getAlignmentModifiers, getSizeModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface BreadcrumbProps<T>
	extends Bulma.Tag,
		Bulma.Alignment,
		Bulma.Size,
		React.HTMLProps<T> {
	hasSeparator?: "arrow" | "bullet" | "dot" | "succeeds";
}

const __Breadcrumb: React.FC<BreadcrumbProps<HTMLElement>> = ({
	tag = "nav",
	isAlign,
	hasSeparator,
	isSize,
	...props
}) => {
	const className = classnames(
		"breadcrumb",
		{
			...getAlignmentModifiers({ isAlign }),
			...getSizeModifiers({ isSize }),
			[`has-${hasSeparator}-separator`]: Boolean(hasSeparator),
		},
		props.className,
	);

	return React.createElement(tag, {
		...props,
		"aria-label": "breadcrumbs",
		className,
	});
};

export const Breadcrumb = withHelpersModifiers(__Breadcrumb);
