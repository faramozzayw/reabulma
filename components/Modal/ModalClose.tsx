import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";

import { getSizeModifiers } from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface ModalCloseProps<T>
	extends Bulma.Size,
		Bulma.Tag,
		React.HTMLProps<T> {}

function __ModalClose({
	tag = "button",
	isSize,
	...props
}: ModalCloseProps<HTMLElement>) {
	const className = classnames(
		"modal-close",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
}

export const ModalClose = withHelpersModifiers(__ModalClose);
