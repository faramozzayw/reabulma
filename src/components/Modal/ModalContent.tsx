import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface ModalContentProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __ModalContent: React.FC<ModalContentProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("modal-content", props.className);

	return React.createElement(tag, { ...props, className });
};

export const ModalContent = withHelpersModifiers(__ModalContent);
