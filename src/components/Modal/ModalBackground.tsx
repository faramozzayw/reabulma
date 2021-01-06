import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface ModalBackgroundProps<T>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __ModalBackground: React.FC<ModalBackgroundProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("modal-background", props.className);

	return React.createElement(tag, { ...props, className });
};

export const ModalBackground = withHelpersModifiers(__ModalBackground);
