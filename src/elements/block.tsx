import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";

export interface Block<T> extends Bulma.Tag, React.HTMLProps<T> {}

export const Block = ({ tag = "div", ...props }: Block<HTMLElement>) => {
	const className = classnames("block", props.className);

	return React.createElement(tag, { ...props, className });
};
