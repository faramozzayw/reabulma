import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface FieldBodyProps<T = HTMLElement>
	extends Bulma.Tag,
		HTMLProps<T> {}

const __FieldBody: FC<FieldBodyProps> = ({ tag = "div", ...props }) => {
	const className = classnames("field-body", props.className);

	return createElement(tag, { ...props, className });
};

export const FieldBody = withHelpersModifiers(__FieldBody);
