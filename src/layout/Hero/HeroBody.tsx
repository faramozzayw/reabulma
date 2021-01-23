import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface HeroBodyProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __HeroBody: React.FC<HeroBodyProps<HTMLElement>> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("hero-body", props.className);

	return React.createElement(tag, { ...props, className });
};

export const HeroBody = withHelpersModifiers(__HeroBody);
