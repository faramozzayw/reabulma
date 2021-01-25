import React from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface FieldBodyProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __FieldBody: React.FC<FieldBodyProps> = ({ tag = "div", ...props }) => {
	const className = classnames("field-body", props.className);

	return React.createElement(tag, { ...props, className });
};

export const FieldBody = withHelpersModifiers(__FieldBody);
