import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardHeaderTitleProps<T>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __CardHeaderTitle: React.FC<CardHeaderTitleProps<HTMLElement>> = ({
	tag = "p",
	...props
}) => {
	const className = classnames("card-header-title", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardHeaderTitle = withHelpersModifiers(__CardHeaderTitle);
