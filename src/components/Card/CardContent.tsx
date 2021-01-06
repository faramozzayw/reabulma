import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardContentProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __CardContent: React.FC<CardContentProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("card-content", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardContent = withHelpersModifiers(__CardContent);
