import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __Card: React.FC<CardProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("card", props.className);

	return React.createElement(tag, { ...props, className });
};

export const Card = withHelpersModifiers(__Card);
