import { HTMLProps, createElement } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface BoxProps<T> extends Bulma.Tag, HTMLProps<T> {}

const __Box = ({ tag = "div", ...props }: BoxProps<HTMLElement>) => {
	const className = classnames("box", props.className);

	return createElement(tag, { ...props, className });
};

export const Box = withHelpersModifiers(__Box);
