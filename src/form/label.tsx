import type { FC, HTMLProps } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface LabelProps<T> extends Bulma.Size, HTMLProps<T> {}

const __Label: FC<LabelProps<HTMLElement>> = ({ isSize, ...props }) => {
	const className = classnames(
		"label",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return (
		<label {...(props as HTMLProps<HTMLLabelElement>)} className={className} />
	);
};

export const Label = withHelpersModifiers(__Label);
