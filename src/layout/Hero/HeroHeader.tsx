import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface HeroHeaderProps<T> extends Bulma.Tag, React.HTMLProps<T> {}

const __HeroHeader: React.FC<HeroHeaderProps<HTMLElement>> = ({
	tag = "header",
	...props
}) => {
	const className = classnames("hero-head", props.className);

	return React.createElement(tag, { ...props, className });
};

export const HeroHeader = withHelpersModifiers(__HeroHeader);
