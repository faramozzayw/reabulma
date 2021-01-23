import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardFooterItemProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __CardFooterItem: React.FC<CardFooterItemProps<HTMLElement>> = ({
	tag = "p",
	...props
}) => {
	const className = classnames("card-footer-item", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardFooterItem = withHelpersModifiers(__CardFooterItem);
