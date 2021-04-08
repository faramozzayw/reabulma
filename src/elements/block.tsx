import classnames from "classnames";
import { HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface BlockProps<T> extends Bulma.Tag, HTMLProps<T> {}

const __Block = ({ tag = "div", ...props }: BlockProps<HTMLElement>) => {
	const className = classnames("block", props.className);

	return createElement(tag, { ...props, className });
};

export const Block = withHelpersModifiers(__Block);
