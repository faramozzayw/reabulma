import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";

export interface CardImageProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

export const CardImage: React.FC<CardImageProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("card-image", props.className);

	return React.createElement(tag, { ...props, className });
};
