import classnames from "classnames";
import { FC, HTMLProps, createElement } from "react";

import { Bulma } from "./../bulma";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ColumnsProps<T = HTMLElement> extends Bulma.Tag, HTMLProps<T> {
	isDesktop?: boolean;
	isMobile?: boolean;
	isGapless?: boolean;
	isCentered?: boolean;
	isVCentered?: boolean;
	multiline?: boolean;
}

const __Columns: FC<ColumnsProps> = ({
	tag = "div",
	isDesktop,
	isMobile,
	isGapless,
	isCentered,
	isVCentered,
	multiline,
	...props
}) => {
	const className = classnames(
		"columns",
		{
			"is-desktop": isDesktop,
			"is-mobile": isMobile,
			"is-gapless": isGapless,
			"is-centered": isCentered,
			"is-vcentered": isVCentered,
			"is-multiline": multiline,
		},
		props.className,
	);

	return createElement(tag, { ...props, className });
};

export const Columns = withHelpersModifiers(__Columns);
