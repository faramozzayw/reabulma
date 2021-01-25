import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface FooterProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const __Footer: React.FC<FooterProps> = ({
	tag = "footer",
	...props
}) => {
	const className = classnames("footer", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Footer = withHelpersModifiers(__Footer);
