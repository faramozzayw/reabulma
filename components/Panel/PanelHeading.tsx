import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PanelHeadingProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __PanelHeading: React.FC<PanelHeadingProps<HTMLElement>> = ({
	tag = "p",
	...props
}) => {
	const className = classnames("panel-heading", props.className);

	return React.createElement(tag, { ...props, className });
};

export const PanelHeading = withHelpersModifiers(__PanelHeading);
