import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";

export interface TableContainerProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

export const TableContainer: React.FC<TableContainerProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("table-container", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};
