import React from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import { getSizeModifiers } from "./../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface LabelProps<T> extends Bulma.Size, React.HTMLProps<T> {}

const __Label: React.FC<LabelProps<HTMLElement>> = ({ isSize, ...props }) => {
	const className = classnames(
		"label",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	return (
		<label
			{...(props as React.Props<HTMLLabelElement>)}
			className={className}
		/>
	);
};

export const Label = withHelpersModifiers(__Label);
