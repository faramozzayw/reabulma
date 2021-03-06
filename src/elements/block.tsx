import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface BlockProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __Block = ({ tag = "div", ...props }: BlockProps<HTMLElement>) => {
	const className = classnames("block", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Block = withHelpersModifiers(__Block);
