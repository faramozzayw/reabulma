import React from "react";
import classnames from "classnames";
import { Bulma } from "../../bulma";

export interface TableProps
	extends Bulma.FullWidth,
		React.HTMLProps<HTMLTableElement> {
	isBordered?: boolean;
	isStriped?: boolean;
	isNarrow?: boolean;
	isHoverable?: boolean;
}

export const Table: React.FC<TableProps> = ({
	children,
	isBordered,
	isStriped,
	isNarrow,
	isFullWidth,
	isHoverable,
	...props
}) => {
	const className = classnames(
		"table",
		{
			"is-bordered": isBordered,
			"is-narrow": isNarrow,
			"is-striped": isStriped,
			"is-fullwidth": isFullWidth,
			"is-hoverable": isHoverable,
		},
		props.className,
	);

	return (
		<table className={className} {...props}>
			{children}
		</table>
	);
};
