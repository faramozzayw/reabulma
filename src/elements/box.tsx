import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface BoxProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __Box = ({ tag = "div", ...props }: BoxProps<HTMLElement>) => {
	const className = classnames("box", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Box = withHelpersModifiers(__Box);
