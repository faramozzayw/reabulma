import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";

export interface CardHeaderTitleProps<T>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

export const CardHeaderTitle: React.FC<CardHeaderTitleProps<HTMLElement>> = ({
	tag = "p",
	...props
}) => {
	const className = classnames("card-header-title", props.className);

	return React.createElement(tag, { ...props, className });
};
