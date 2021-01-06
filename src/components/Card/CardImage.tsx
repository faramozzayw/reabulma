import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface CardImageProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __CardImage: React.FC<CardImageProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("card-image", props.className);

	return React.createElement(tag, { ...props, className });
};

export const CardImage = withHelpersModifiers(__CardImage);
