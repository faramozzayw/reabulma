import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardFooterProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __CardFooter: React.FC<CardFooterProps<HTMLElement>> = ({
	tag = "footer",
	...props
}) => {
	const className = classnames("card-footer", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardFooter = withHelpersModifiers(__CardFooter);
