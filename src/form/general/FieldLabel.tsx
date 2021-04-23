import { FC, HTMLProps, createElement } from "react";
import classnames from "classnames";

import { Bulma } from "../../bulma";
import { getSizeModifiers } from "../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface FieldLabelProps<T>
	extends Bulma.Tag,
		Bulma.Size,
		HTMLProps<T> {}

const __FieldLabel: FC<FieldLabelProps<HTMLElement>> = ({
	tag = "div",
	isSize,
	...props
}) => {
	const className = classnames(
		"field-label",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const FieldLabel = withHelpersModifiers(__FieldLabel);
