import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface IconTextProps
	extends Bulma.Tag,
		React.HTMLProps<HTMLElement> {}

const __IconText: React.FC<IconTextProps> = ({
	tag = "span",
	children,
	...props
}) => {
	const className = classnames("icon-text", props.className);

	return React.createElement(tag, { ...props, className });
};

export const IconText = withHelpersModifiers(__IconText);
