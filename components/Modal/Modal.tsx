import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getActiveModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface ModalProps<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

const __Modal: React.FC<ModalProps<HTMLElement>> = ({
	tag = "div",
	isActive,
	...props
}) => {
	const className = classnames(
		"modal",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Modal = withHelpersModifiers(__Modal);
