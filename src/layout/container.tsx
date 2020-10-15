import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";

export interface ContainerProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

export const Container: React.FC<ContainerProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("container", props.className);

	return React.createElement(tag, { ...props, className });
};
