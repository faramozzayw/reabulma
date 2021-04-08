import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface TableContainerProps<T> extends Bulma.Tag, HTMLProps<T> {}

const __TableContainer: FC<TableContainerProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("table-container", props.className);

	return createElement(tag, {
		...props,
		className,
	});
};

export const TableContainer = withHelpersModifiers(__TableContainer);
