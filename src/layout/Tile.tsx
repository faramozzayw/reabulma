import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface TileProps<T> extends Bulma.Tag, React.HTMLProps<T> {
	isAncestor?: boolean;
	isChild?: boolean;
	isParent?: boolean;
	isVertical?: boolean;
}

const __Tile: React.FC<TileProps<HTMLElement>> = ({
	tag = "div",
	isAncestor,
	isChild,
	isParent,
	isVertical,
	...props
}) => {
	const className = classnames(
		"tile",
		{
			"is-ancestor": isAncestor,
			"is-child": isChild,
			"is-parent": isParent,
			"is-vertical": isVertical,
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

export const Tile = withHelpersModifiers(__Tile);
