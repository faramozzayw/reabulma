import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardHeaderProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __CardHeader: React.FC<CardHeaderProps<HTMLElement>> = ({
	tag = "header",
	...props
}) => {
	const className = classnames("card-header", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardHeader = withHelpersModifiers(__CardHeader);
