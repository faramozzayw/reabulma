import { FC, HTMLProps, createElement } from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface IconTextProps extends Bulma.Tag, HTMLProps<HTMLElement> {}

const __IconText: FC<IconTextProps> = ({
	tag = "span",
	children,
	...props
}) => {
	const className = classnames("icon-text", props.className);

	return createElement(tag, { ...props, className });
};

export const IconText = withHelpersModifiers(__IconText);
