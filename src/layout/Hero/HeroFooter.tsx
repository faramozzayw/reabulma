import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface HeroFooterProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __HeroFooter: React.FC<HeroFooterProps<HTMLElement>> = ({
	tag = "footer",
	...props
}) => {
	const className = classnames("hero-foot", props.className);

	return React.createElement(tag, { ...props, className });
};

export const HeroFooter = withHelpersModifiers(__HeroFooter);
